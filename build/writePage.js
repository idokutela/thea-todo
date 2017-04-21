const p = require('promisify-node');
const path = require('path');
const CleanCss = require('clean-css');
const del = require('del');
const htmlMinifiy = require('html-minifier').minify;

const fs = p('fs');

const GITHUB = 'https://github.com/idokutela/thea-todo.git';
/* eslint-disable global-require, import/no-dynamic-require */
module.exports = (outdir, js = 'app.js', css = 'app.css', github = GITHUB) => {
  const TodoWidget = require(path.join(outdir, js)).default;

  fs.readFile(path.join(outdir, css), 'utf8')
    .then((styles) => {
      const clean = new CleanCss();
      return clean.minify(styles).styles;
    })
    .then(styles => `
        <!doctype html>
          <html class="no-js" lang="">
            <head>
              <meta charset="utf-8">
              <meta http-equiv="x-ua-compatible" content="ie=edge">
              <title>ToDo in Thea</title>
              <meta name="description" content="">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <style>${styles}</style>
            </head>
            <body>
              <section>
                <div class="description">
                  <h1>Thea ToDo</h1>
                  <p>
                    The canonical example, revisited in Thea.
                  </p>
                  <p>
                     Go ahead, <a href="${github}">clone the repository</a>, take a look. You won’t regret it.
                  </p>
                  <p class="noscript">
                    Javascript seems not to be working. Please enable it to use the demo.
                  </p>
                </div>
              </section>
              <section id="todoContainer">${TodoWidget().toString()}</section>
              <div class="loading-message">
                <span>One moment while the script loads…</span>
              </div>
              <script type="text/javascript">
                document.body.parentNode.removeAttribute('class');
                function a() {
                  document.body.parentNode.setAttribute('class', 'loading');
                }
                todoContainer.addEventListener('click', a, true);
                todoContainer.addEventListener('focus', a, true);
              </script>
              <script type="text/javascript" src="${js}"></script>
            </body>
          </html>
        `)
    .then(file => htmlMinifiy(file, {
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      minifyCSS: true,
    }))
    .then(file => fs.writeFile(path.join(outdir, 'index.html'), file, 'utf8'))
    .then(() => del(path.join(outdir, css)));
};

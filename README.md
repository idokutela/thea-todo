# Todo MVC
## The canonical example, this time in Thea.

Before reading any further, why not [check it out](https://idokutela.github.io/thea-todo/)?

## A guide to the code
The live page is in `doc`.

It is generated with `build.js`,
which uses webpack to build the scripts and styles, and
then renders a static html page to doc using the todo component
to create its first render.

There are three yarn commands defined:

 - `build`: builds the page,
 - `watch`: fires up a live dev server,
 - `test`: runs all unit tests.

The folders are organised as follows.

### `src`
`src` contains all the app source.

The root contains the index file for the app,
as well as the base styles.

### `src/components`
Components each have their own folder. Each component is
kept with its own styles, tests, and helpers.

The only exception to this rule are the various icons, which are
collected together in the `Icons` folder.

The root component is `TodoWidget`.

Each component has its own readme.

### `src/wrapper`
`StatefulComponent` is a wrapper that turns a pure component
into a stateful one. See the local readme for more information.

### `src/utils`
Contains only one file (and the associated tests): `functional.js`.
This collects a very small set of functional utilities (compose, set...).

### `build`
Contains tools for `build.js`.

### `dev`
Contains a template to hang the component onto in dev.

### Project root
contains configuration files.

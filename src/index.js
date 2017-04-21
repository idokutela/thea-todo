/* global a */
import 'thea/types/dom/domKnowledge'; // tempoarary cludge
import mountOnNode from 'components/TodoWidget';
import './style.css';

export { TodoWidget as default } from 'components/TodoWidget';

if (typeof document !== 'undefined') {
  console.log('Live'); // eslint-disable-line
  document.body.parentNode.removeAttribute('class');
  const container = document.getElementById('todoContainer');
  container.removeEventListener('click', window.a, true);
  container.removeEventListener('focus', window.a, true);

  mountOnNode(container);
  if (document.activeElement) {
    const activeElement = document.activeElement;
    activeElement.blur();
    requestAnimationFrame(() => activeElement.focus());
  }
}

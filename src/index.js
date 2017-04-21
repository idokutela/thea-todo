import 'thea/types/dom/domKnowledge'; // tempoarary cludge
import mountOnNode from 'components/TodoWidget';
import './style.css';

export { TodoWidget as default } from 'components/TodoWidget';

if (typeof document !== 'undefined') {
  console.log('Live');
  document.body.parentNode.removeAttribute('class');
  mountOnNode(document.getElementById('todoContainer'));
}

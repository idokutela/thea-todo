import 'thea/types/dom/domKnowledge'; // tempoarary cludge
import mountOnNode from 'components/TodoWidget';
import './style.css';

export { TodoWidget as default } from 'components/TodoWidget';

if (typeof document !== 'undefined') {
  console.log('Mounting');
  mountOnNode(document.getElementById('todoContainer'));
}

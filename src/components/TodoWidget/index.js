import view from 'thea';
import TodoList from 'components/TodoList';
import makeStateful from 'wrappers/StatefulComponent';
import { compose } from 'util/functional';

import { makeStateUpdaters, stateToAttrs, initialState } from './stateManager';

/* eslint-disable no-shadow, no-param-reassign */

/*
 * This is the actual stateful todo list. Notice
 * how it is obtained by wraping the stateless todo list
 * with makeStateful.
 *
 * I highly recommend going over to wrappers/StatefulComponent
 * to see how this works. Wrapping views to add higher behaviour
 * is a key aspect to thea's philosophy.
 */
export const TodoWidget = compose(
  makeStateful(initialState, stateToAttrs),
  view,
)(
  ({ items, update }) => <TodoList items={items} {...makeStateUpdaters(update)} />,
);

/*
 * Mounts the component on a node.
 */
export default function mountOnNode(node) {
  if (!node || node.nodeType !== Node.ELEMENT_NODE) {
    throw new Error('Expected a node to mount the TodoList into.');
  }
  // Revive or make new
  const inst = TodoWidget.call(node && node.firstChild);

  // If there is something to revive on, return.
  if (node.firstChild) return;

  // Add the new nodes.
  const docFrag = document.createDocumentFragment();
  [...inst.children()].forEach(c => docFrag.appendChild(c));
  node.appendChild(docFrag);
}

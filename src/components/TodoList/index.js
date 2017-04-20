import view from 'thea';

import Input from '../TodoInput';
import Item from '../Item';
import TodoZero from '../TodoZero';
import SwapButton from '../SwapButton';
import styles from './style.css';
/*
 * # TodoList
 * A stateless `dumb` list of Todos. To see the stateful component,
 * look at `TodoWidget`.
 *
 * Even if it is stateless, todolist is not without interest.
 * Its structure is:
 *
 *  -- TodoInput
 *  -- ul
 *    -- Item
 *    -- SwapButton
 *    -- Item
 *    -- SwapButton
 *    -- Item
 *    ...
 *
 * There are various ways to achieve the interleaving of items and
 * swap buttons. Here, we map out the item data to Items,
 * then do a reduction, for each item that isn’t the first,
 * pushing a swap button onto the list.
 */
/* eslint-disable no-undef, no-unused-expressions, react/no-array-index-key */
export const render = ({
  items = [],
  swapItems = () => {},
  updateItem = () => {},
  toggleDone = () => {},
  deleteItem = () => {},
  addItem = () => {},
  markAllAsDone = () => {},
  deleteAll = () => {},
}) => {
  const makeItemAttrs = (item, index) => Object.assign({}, item, {
    toggleDone: () => toggleDone(index),
    updateItem: value => updateItem(index, value),
    deleteItem: () => deleteItem(index),
  });

  const inputHandlers = {
    addItem: value => addItem(value),
    markAllAsDone,
    deleteAll,
  };

  // Interleaves todo items with swap buttons.
  const listItems = items.slice().map(makeItemAttrs)
       .map(item => <Item {...item} key={item.id} />)
       .reduce((r, item, i) => {
         // Concat flattens arrays, so don’t forget to wrap items
         const retval = (i !== 0) ?
            r.concat([<SwapButton doSwap={() => swapItems(i)} key={`swap-${i}`} />]) : r;
         return retval.concat([item]);
       }, []);

  return (
    <div class={styles.container}>
      <Input {...inputHandlers} noItems={!items.length} />
      <branch>
        <if test={items.length}>
          <ul class={styles.todos}>
            { listItems }
          </ul>
        </if>
        <default>
          <TodoZero />
        </default>
      </branch>
    </div>
  );
};

export default view(render);

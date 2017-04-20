import view from 'thea';

import Input from '../TodoInput';
import Item from '../Item';
import TodoZero from '../TodoZero';
import SwapButton from '../SwapButton';
import styles from './style.css';

/* eslint-disable no-undef */
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

  const listItems = items.slice().map(makeItemAttrs)
       .map(item => <Item {...item} key={item.id} />)
       .reduce((r, item, i) => {
         (i !== 0) && r.push(<SwapButton doSwap={() => swapItems(i)} key={`swap-${i}`} />);
         r.push(item);
         return r;
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

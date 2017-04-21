import view from 'thea';
import styles from './style.css';
import Delete from '../Icons/Delete';
import Done from '../Icons/Done';
import IconButton from '../IconButton';
import Input from '../Input';

export const render = ({
  value,
  toggleDone = () => {},
  deleteItem = () => {},
  updateItem = () => {},
  done }) =>
(
  <li class={styles.container}>
    <IconButton
      onClick={toggleDone}
      label={done ? 'Uncheck todo' : 'Mark todo as done'}
      class={done ? styles.checked : styles.unchecked}
    >
      <Done />
    </IconButton>
    <Input value={value} disabled={done || undefined} onInput={updateItem} label="Todo itemV" />
    <IconButton
      onClick={deleteItem} class={styles.button} label="Delete Todo"
    >
      <Delete />
    </IconButton>
  </li>
);

export default view(render);

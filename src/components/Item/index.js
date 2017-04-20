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
      label="Done"
      class={done ? styles.checked : styles.unchecked}
    >
      <Done />
    </IconButton>
    <Input value={value} disabled={done || undefined} onInput={updateItem} />
    <IconButton
      onClick={deleteItem} class={styles.button}
    >
      <Delete />
    </IconButton>
  </li>
);

export default view(render);

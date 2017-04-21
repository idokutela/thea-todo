import view from 'thea';
import IconButton from '../IconButton';
import DoneAll from '../Icons/DoneAll';
import styles from './style.css';
import Input from '../Input';
import DeleteSweep from '../Icons/DeleteSweep';

export const render = ({
  noItems,
  addItem = () => {},
  markAllAsDone = () => {},
  deleteAll = () => {},
}) => (
  <div class={styles.container}>
    <IconButton onclick={markAllAsDone} disabled={noItems || undefined} label="Mark all as done"><DoneAll /></IconButton>
    <Input placeholder="Add todo" onInput={addItem} value="" label="Add todo" />
    <IconButton onclick={deleteAll} disabled={noItems || undefined} label="Delete all todos"><DeleteSweep /></IconButton>
  </div>
);

export default view(render);

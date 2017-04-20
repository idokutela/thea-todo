import view from 'thea';
import styles from './styles.css';

/**
 * # TodoZero
 * A placeholder for the empty state.
 *
 * Nothing interesting here.
 */
export default view(() => (
  <div class={styles.container}>
    <span class={styles.base}>Nothing to do… </span>
    <span class={styles.awesome}>That’s frigging Awesome 👍👍👍</span>
  </div>
));

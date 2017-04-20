import view from 'thea';
import IconButton from 'components/IconButton';
import SwapVert from 'components/Icons/SwapVert';

import styles from './style.css';

export const render = ({ doSwap }) => (
  <div class={styles.container}>
    <IconButton class={styles.swapButton} onClick={doSwap} label="Swap items">
      <span class={styles.swapButtonInt}>
        <SwapVert />
      </span>
    </IconButton>
  </div>
);

export default view(render);

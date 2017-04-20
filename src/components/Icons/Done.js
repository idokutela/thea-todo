import view from 'thea';

import Icon from './Icon';

export default view(attrs => (<Icon {...attrs}>
  <path d="M0 0h24v24H0z" fill="none" />
  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
</Icon>));

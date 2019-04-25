import 'element-closest';
import 'classlist-polyfill';

import remoteclick from 'remoteclick/src/remoteclick';

window.remoteclick(`*[data-neverending-posts]`, (element) => ({
  ...JSON.parse(
    decodeURIComponent(
      element.getAttribute('data-neverending-posts')
    )
  )
}));

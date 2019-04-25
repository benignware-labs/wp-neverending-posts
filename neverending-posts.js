import 'core-js/features/url';
import 'mdn-polyfills/Element.prototype.closest';
import 'mdn-polyfills/Element.prototype.classList';

import remoteclick from 'remoteclick/src/remoteclick';

window.remoteclick(`*[data-neverending-posts]`, (element) => ({
  ...JSON.parse(
    decodeURIComponent(
      element.getAttribute('data-neverending-posts')
    )
  )
}));

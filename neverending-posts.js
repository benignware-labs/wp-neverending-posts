import '@babel/polyfill';
import 'url-polyfill';
import 'mdn-polyfills/Element.prototype.closest';
import 'mdn-polyfills/Element.prototype.classList';
import 'isomorphic-fetch';

import remoteclick from 'remoteclick';

window.remoteclick(`*[data-neverending-posts]`, (element) => ({
  ...JSON.parse(
    decodeURIComponent(
      element.getAttribute('data-neverending-posts')
    )
  )
}));

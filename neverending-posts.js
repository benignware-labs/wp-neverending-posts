import remoteclick from 'remoteclick';

window.remoteclick(`*[data-remote='append']`, {
  mode: 'append'
});

window.remoteclick(`*[data-remote='prepend']`, {
  mode: 'prepend'
});

const { ipcRenderer } = require('electron');

ipcRenderer.on('redirect-url', (event, url) => {
  window.location.assign(url);
});

module.exports = (Franz) => {
  console.log('[UserScript] Setting up RC custom');
  const getMessages = function getMessages() {
    const elements = document.querySelectorAll('div#Message-umi>span');
    let indirectCount = 0;
    if (elements[0]) {
      indirectCount = parseInt(elements[0].innerHTML, 10);
    }
    Franz.setBadge(indirectCount);
  };
  Franz.loop(getMessages);
};

"use strict";

module.exports = Franz => class Deezer extends Franz {
  overrideUserAgent() {
    return window.navigator.userAgent.replace(/(Franz|Electron)([^\s]+\s)/g, '');
  }
};
"use strict";

module.exports = Franz => class RingCentral extends Franz {
  overrideUserAgent() {
    return window.navigator.userAgent.replace(/(Franz|Electron)([^\s]+\s)/g, '');
  }

};
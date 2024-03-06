'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-937e1eac.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.12.4 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('my-web-component.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"apiUrl":[1,"api-url"],"items":[32],"currentIndex":[32],"errorMessage":[32]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=my-web-component.cjs.js.map
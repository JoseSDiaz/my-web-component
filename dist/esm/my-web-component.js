import { p as promiseResolve, b as bootstrapLazy } from './index-ccf54408.js';
export { s as setNonce } from './index-ccf54408.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.12.4 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["my-component",[[1,"my-component",{"apiUrl":[1,"api-url"],"items":[32],"currentIndex":[32],"errorMessage":[32]}]]]], options);
});

//# sourceMappingURL=my-web-component.js.map
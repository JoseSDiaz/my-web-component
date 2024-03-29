import { b as bootstrapLazy } from './index-ccf54408.js';
export { s as setNonce } from './index-ccf54408.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["my-component",[[1,"my-component",{"apiUrl":[1,"api-url"],"items":[32],"currentIndex":[32],"errorMessage":[32]}]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map
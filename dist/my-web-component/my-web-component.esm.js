import { p as r, b as e } from './p-c71b9504.js';
export { s as setNonce } from './p-c71b9504.js';
import { g as t } from './p-e1255160.js';
const o = () => {
  const e = import.meta.url;
  const s = {};
  if (e !== '') {
    s.resourcesUrl = new URL('.', e).href;
  }
  return r(s);
};
o().then(async r => {
  await t();
  return e([['p-d03eb4a4', [[1, 'my-component', { apiUrl: [1, 'api-url'], items: [32], currentIndex: [32], errorMessage: [32] }]]]], r);
});
//# sourceMappingURL=my-web-component.esm.js.map

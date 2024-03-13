import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'my-web-component',
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
};

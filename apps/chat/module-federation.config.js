// const { share } = require('module-federation-utils');

module.exports = {
  name: 'chat',
  exposes: {
    './Module': 'apps/chat/src/app/remote-entry/entry.module.ts',
  },
  // shared: share({ requiredVersion: 'auto' }),

  // sharedMappings: ['@chatwidget/api'],
};
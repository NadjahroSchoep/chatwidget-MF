module.exports = {
  name: 'chat',
  exposes: {
    './Module': 'apps/chat/src/app/remote-entry/entry.module.ts',
  }
};
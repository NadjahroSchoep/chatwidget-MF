const dependencies = new Set([
  '@angular/core',
  '@angular/common',
  '@angular/common/http',
  '@angular/forms',
  '@angular/router',
  'stream-chat-angular',
  '@ngx-translate/core',
  '@auth0/auth0-angular'
]);
module.exports = {
  name: 'chat',
  exposes: {
    './Module': 'apps/chat/src/app/remote-entry/entry.module.ts',
  },
  shared: (libraryName, defaultConfig) => {
    if (dependencies.has(libraryName)) {
      return {
        ...defaultConfig,
        eager: true
      };
    }

    // Returning false means the library is not shared.
    return false;
  }
};

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
  name: 'chatwidget',
  exposes: {
    './Module': 'apps/chatwidget/src/app/remote-entry/entry.module.ts',
  },
  remotes: [],
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

import { Route } from '@angular/router';
// import { loadRemoteModule } from '@nrwl/angular/mf';

export const appRoutes: Route[] = [
  // {
  //   path: 'chat',
  //   loadChildren: () =>
  //     loadRemoteModule('chat', './Module').then((m) => m.RemoteEntryModule),
  // },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     loadRemoteModule('auth', './Module').then((m) => m.RemoteEntryModule),
  // },
  {
    path: '',
    loadChildren: () =>
      import('./remote-entry/entry.module').then((m) => m.RemoteEntryModule),
  },
];

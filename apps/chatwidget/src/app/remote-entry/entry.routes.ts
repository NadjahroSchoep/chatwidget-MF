import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';

export const remoteRoutes: Route[] = [
  {
    path: 'chat',
    loadChildren: () =>
      loadRemoteModule('chat', './Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    loadChildren: () =>
      loadRemoteModule('auth', './Module').then((m) => m.RemoteEntryModule),
  },
];

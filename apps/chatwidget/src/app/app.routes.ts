import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
  {
    path: 'chat',
    loadChildren: () =>
      loadRemoteModule('chat', './Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      loadRemoteModule('auth', './Module').then((m) => m.RemoteEntryModule),
  },
];

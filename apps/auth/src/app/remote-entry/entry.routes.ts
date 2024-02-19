import { Route } from '@angular/router';
import { AuthComponent } from './auth.component';
import { CallbackComponent } from './callback/callback.component';

export const remoteRoutes: Route[] = [
  { path: '', component: AuthComponent },
  { path: 'callback', component: CallbackComponent },
];

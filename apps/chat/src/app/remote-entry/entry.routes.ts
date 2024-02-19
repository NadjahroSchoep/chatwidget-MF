import { Route } from '@angular/router';
import { ChatComponent } from './chat.component';
import { AddChannelComponent } from './add-channel/add-channel.component';

export const remoteRoutes: Route[] = [
  { path: '', component: ChatComponent },
  { path: 'add-channel', component: AddChannelComponent },
];

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';

import { remoteRoutes } from './entry.routes';
import { CallbackComponent } from './callback/callback.component';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [AuthComponent, CallbackComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(remoteRoutes), 
  ],
  exports: [
    AuthModule
  ],
  providers: [],
})
export class RemoteEntryModule {}

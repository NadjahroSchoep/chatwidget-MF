import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';

import { remoteRoutes } from './entry.routes';
import { CallbackComponent } from './callback/callback.component';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@NgModule({
  declarations: [AuthComponent, CallbackComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(remoteRoutes), 
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
})
export class RemoteEntryModule {}

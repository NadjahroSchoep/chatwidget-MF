import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'chatwidget-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  
  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
    ) {}

  isAuthenticated$ = this.auth.isAuthenticated$

  login(): void {
    this.auth.loginWithRedirect({
      appState: {
        target: '/chat',
      },
      authorizationParams: {
        prompt: 'login',
      },
    });
  }

  logout(): void {
    this.auth.logout({
      logoutParams: {
        returnTo: this.doc.location.origin,
      },
    });
  }

  signup(): void {
    this.auth.loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signup',
      },
    });
  }
}
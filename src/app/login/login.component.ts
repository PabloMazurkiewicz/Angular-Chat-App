import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  error: string;

  constructor(readonly router: Router, readonly auth: AuthService) {}

  login(userId: string) {
    let action = Promise.resolve();

    if (!this.auth.isDemo) {
      action = this.auth.login(userId);
    }

    action.then(
      () => this.router.navigateByUrl('/chat'),
      err => (this.error = err)
    );
  }
}

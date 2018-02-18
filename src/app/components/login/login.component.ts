import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { AlertService } from '../../shared/services/alert.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user = new User('', '');
  public loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this._fb.group({
      name: ['', [<any>Validators.required, <any>Validators.minLength(5), <any>Validators.maxLength(20)]],
      password: ['', [<any>Validators.required, <any>Validators.minLength(8)]],
    });
    console.log('ngOnInit');
  }

  constructor(private _authService: AuthenticationService,
    private _alertService: AlertService,
    private _fb: FormBuilder,
    private _router: Router) {
      this.redirectUser();
    }

  onSubmit(_user: User, _isValid: boolean) {
    if (_isValid) {
      this.loginUser(_user);
    }
  }

  redirectUser() {
    if (this._authService.isLoggedIn) {
      // Get the redirect URL from our auth service
      // If no redirect has been set, use the default
      const redirect = this._authService.redirectUrl ? this._authService.redirectUrl : '/admin';

      // Redirect the user
      this._router.navigate([redirect]);
    }
  }

  loginUser(_user: User) {
    this._authService.login(_user)
      .subscribe(
        () => {
            this._alertService.success('Login successful!');
            this.redirectUser();
        },
        error => {
          this._alertService.error(error);
        });
  }
}

import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthenticationService {
  public isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor() { }

  login(_user: User):  Observable<User> {
    const  {username, password} = environment.login;
    return Observable.create(observer => {
      if (_user.name === username && _user.password === password) {
        this.isLoggedIn = true;
        observer.next(_user);
        observer.complete();
      } else {
          this.isLoggedIn = false;
          observer.error('Invalid username or password');
      }
    });
  }
}

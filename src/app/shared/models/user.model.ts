export class User {
  private _name: string;
  private _password: string;

  constructor(
    _name: string,
    _password: string) {
    this._name = _name;
    this._password = _password;
  }

  get name() {
    return this._name;
  }

  get password() {
    return this._password;
  }

  set name(_name: string) {
    this._name = _name;
  }

  set password(_password: string) {
    this._password = _password;
  }
}

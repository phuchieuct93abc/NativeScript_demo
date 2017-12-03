import { Config } from './../config';
import { Observable } from "rxjs/Rx";
import { User } from './user';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
@Injectable()
export class UserService {
    constructor(private http: Http) { }
   
  register(user: User) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.post(
      Config.apiUrl + "Users",
      JSON.stringify({
        Username: user.email,
        Email: user.email,
        Password: user.password
      }),
      { headers: headers }
    )
    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}
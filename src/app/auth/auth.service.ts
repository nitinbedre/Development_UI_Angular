import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credentials, JwtToken, Register } from './auth.modal';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = environment.developmentUrl;

  constructor(private http: HttpClient) { }

  authenticate(credentials: Credentials) : Observable<JwtToken> {
    return this.http.post<JwtToken>(this.url+'auth', credentials);
  }

  registerUser(user: Register) {
    console.log('register service');
    return this.http.post<any>(this.url + 'user', user);
  }
}

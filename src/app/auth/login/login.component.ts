import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Credentials, JwtToken } from '../auth.modal';
import { GoogleLoginProvider, FacebookLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userValid: boolean = true;
  loginForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });
  constructor(public router: Router, private authService: AuthService, private socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    var credentials: Credentials = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };
    this.authService.authenticate(credentials).subscribe(
      (res: JwtToken) => {
        localStorage.setItem("token", res.jwtToken);
        this.router.navigateByUrl('/student');
      },
      (err: any) => {
        this.userValid = false;
      }
    );
  }

  register() {
    this.router.navigateByUrl('/auth/register');
  }

  loginWithGoogle() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  loginWithFacebook() {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
}

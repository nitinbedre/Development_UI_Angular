import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Register } from '../auth.modal';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registered: boolean = false;
  error: boolean = false;

  constructor(@Inject(LOCALE_ID) public locale: string, private authSerivce: AuthService, private socialAuthService: SocialAuthService) { 
    console.log();
  }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe(user => {
      console.log(user);
    });
  }

  onSubmit(form: any) {
    this.registered = false;
    this.error = false;
    var register: Register = {
      username: form.value.username,
      password: form.value.password,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      mail: form.value.email,
      createdDate: formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss' ,this.locale),
      updatedDate: formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss' ,this.locale)
    }
    this.authSerivce.registerUser(register).subscribe((res: any) => {
      this.registered = true;
      window.scrollTo(0,0);
    },
    (err: any) => {
      this.registered = false;
      this.error = true;
      window.scrollTo(0,0);
    });
  }

  loginWithGoogle() {
    console.log("before");
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log("clicked on login");
  }

  loginWithFacebook() {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
}

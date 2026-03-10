import {Component} from "@angular/core";
import { LoginFormComponent } from "./login-from/login-form.component";
import { LoginBannerComponent } from "./login-banner/login-banner.component";
import { SocialLogin } from "./social-login/social-login.component";
import { RegiterFormComponent } from "./regiter-from/regiter-form.component";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { NgIf } from "@angular/common";

@Component({
     selector:'login-page',
     standalone: true,
       imports: [
        RouterOutlet,
        LoginBannerComponent,
        LoginFormComponent,
        SocialLogin,
        RegiterFormComponent,
        RouterLink,
        NgIf,
        

       ],
        templateUrl:'./login.component.html',
        styleUrl:'./login.component.css',
})
export class LoginComponet{
    constructor(public router: Router) {}
    get title() {
    return this.router.url.includes('login')
      ? 'Sign in to Barren'
      : 'Create an Account';
  }

  get bottomText() {
    return this.router.url.includes('login')
      ? "Don't have an account?"
      : "Already have an account?";
  }

  get bottomLink() {
    return this.router.url.includes('login')
      ? '/register'
      : '/login';
  }

  get bottomLinkText() {
    return this.router.url.includes('login')
      ? 'Sign Up'
      : 'Sign In';
  }
}
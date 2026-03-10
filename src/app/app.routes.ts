import { Routes } from '@angular/router';
import { LoginComponet } from './msf/page-layout/login/login.component';
import { RegiterFormComponent } from './msf/page-layout/login/regiter-from/regiter-form.component';
import { LoginFormComponent } from './msf/page-layout/login/login-from/login-form.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponet,
    children: [
      { path: 'login', component: LoginFormComponent },
      { path: 'register', component: RegiterFormComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  }
];
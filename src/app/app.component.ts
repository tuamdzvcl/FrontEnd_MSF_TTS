import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './msf/header-layout/header-layout.component';
import { LoginComponet } from './msf/page-layout/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderLayoutComponent,
  LoginComponet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tuấn anh';
}

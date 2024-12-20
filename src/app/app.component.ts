import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  template: `
  <nav>
    <a [routerLink]="['/']">Home</a>
    | 
    <a routerLink="/user">User</a>
  </nav>
  <router-outlet />
  `,
  styles: `
   /* :host {
    color: #a144eb;
   } */
  `,
})
export class AppComponent {}

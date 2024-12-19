import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  imports: [UserComponent,RouterOutlet],
  template: `
   @if (isServerRunning) {
    <p> The server is running...</p>
   }@else {
    <p> Server doesn't running </p>
   }
  `,
  styles: `
   :host {
    color: #a144eb;
   }
  `
})
export class AppComponent {
  isServerRunning = true;
}

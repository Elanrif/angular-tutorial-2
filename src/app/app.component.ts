import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  imports: [UserComponent, RouterOutlet],
  template: `
    <div [contentEditable]="isEditable">hello world!</div>
  `,
  styles: `
   :host {
    color: #a144eb;
   }
  `,
})
export class AppComponent {
  isEditable = true;
}

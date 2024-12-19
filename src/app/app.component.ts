import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  imports: [UserComponent, RouterOutlet],
  template: `
    <app-user name="ELanrif SB"/>
  `,
  styles: `
   :host {
    color: #a144eb;
   }
  `,
})
export class AppComponent {
}

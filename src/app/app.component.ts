import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  imports: [UserComponent, RouterOutlet],
  template: `
    <section (mouseover)="onMouseOver()">
      There's a secret message for you, hover to reveal:
      {{ message }}
    </section>
  `,
  styles: `
   :host {
    color: #a144eb;
   }
  `,
})
export class AppComponent {
  message = '' 
  
  onMouseOver() {
    this.message = 'Way to go ⚠️';
  }
}

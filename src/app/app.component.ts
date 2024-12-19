import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  imports: [UserComponent, RouterOutlet],
  template: `
    @for (user of users; track user.id){
    <p>{{ user.name }}</p>
    }
  `,
  styles: `
   :host {
    color: #a144eb;
   }
  `,
})
export class AppComponent {
  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  template: `
  <p>Username: {{username}}</p>
  <p>{{username}}'s favorite framework: {{favoriteFramework}}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
  `,
  styleUrl: './user.component.scss',
})
export class UserComponent {
  favoriteFramework = '';
  username = 'Elanrif';
}

import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ChildComponent } from './child/child.component';
import { CommentsComponent } from './comments/comments.component';

@Component({
  selector: 'app-root',
  imports: [UserComponent, RouterOutlet],
  template: `
  <nav>
    <a href="">Home</a>
    | 
    <a href="/user">User</a>
  </nav>
  <router-outlet />
  `,
  styles: `
   :host {
    color: #a144eb;
   }
  `,
})
export class AppComponent {}

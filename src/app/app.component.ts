import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  imports: [ChildComponent, RouterOutlet],
  template: `
    <app-child (addItemEvent)="_addItem($event)" />
    <p>❤️ all the way down {{items.length}}</p>
  `,
  styles: `
   :host {
    color: #a144eb;
   }
  `,
})
export class AppComponent {
  items = new Array();

  _addItem(item: string) {
    this.items.push(item);
  }
}

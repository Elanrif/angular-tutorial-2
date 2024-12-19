import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    Hello Universe
  `,
  styles: `
   :host {
    color: #a144eb;
   }
  `
})
export class AppComponent {
  city = 'San Francisco';
}

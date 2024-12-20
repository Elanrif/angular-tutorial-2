import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [NgOptimizedImage],
  template: `
    User works!
  `,
  styleUrl: './user.component.scss',
})
export class UserComponent {

}

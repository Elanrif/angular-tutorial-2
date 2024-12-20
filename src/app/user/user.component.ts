import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [NgOptimizedImage],
  template: `
    <li>
      Static Image:
      <img ngSrc="assets/logo.svg" alt="Angular logo" width="32" height="32">
    </li>
    <li>
      Dynamic Image:
      <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32">
    </li>
  `,
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input() name = '';
  logoUrl = 'assets/logo.svg';
  logoAlt = 'Angular logo';
  username = 'ElTech';

}

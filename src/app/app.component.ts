import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  template: `
  <nav>
    <a [routerLink]="['/']">Home</a>
    | 
    <a routerLink="/user">User</a>
  </nav>
  <router-outlet />
  <p> Car listing: {{ display }} </p>
  `,
  styles: ` `,
})
export class AppComponent {
  display = '';
  constructor(private carService: CarService) {
    this.display = this.carService.getCars().join(' 🍥 ');
  }
}

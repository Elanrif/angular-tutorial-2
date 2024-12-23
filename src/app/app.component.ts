import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CarService } from './car.service';
import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { ReversePipe } from './pipes/reverse-pipe';

@Component({
  selector: 'app-root',
  imports: [ReversePipe,RouterLink, RouterOutlet,DecimalPipe, DatePipe, CurrencyPipe],
  template: `
  <nav>
    <a [routerLink]="['/']">Home</a>
    | 
    <a routerLink="/user">User</a>
  </nav>
  <router-outlet />
  <p> Car listing: {{ display }} </p>
  <ul>
    <li>Number with "decimal" {{num | number:"3.2-2"}}</li>
    <li>Date with "date" {{birthday | date: 'medium'}}</li>
    <li>Currency with "currency" {{ cost | currency }}</li>
  </ul>
  <p> Reverse Machine: {{word | reverse}}</p>
  `,
  styles: ` `,
})
export class AppComponent {
  word = 'You are a champion';
  display = '';
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;

  constructor(private carService: CarService) {
    this.display = this.carService.getCars().join(' 🍥 ');
  }

}

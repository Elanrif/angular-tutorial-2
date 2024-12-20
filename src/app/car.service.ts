import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars = ['Sunflower Gt', 'Flexus Sport', 'Sprout Mach One'];

  getCargs(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counter = 0;
  constructor() { }

  setCounter(counter) {
    this.counter = counter;

  }

  addCounter() {
    this.counter++;
  }
}

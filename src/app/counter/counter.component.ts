import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {


  @Input() counter: number;
  @Output() counterChange = new EventEmitter();

  constructor(public counterService: CounterService) { }

  ngOnInit() {
    this.counterService.setCounter(this.counter)
  }


  add(){
    this.counterService.addCounter();
    this.counterChange.emit(this.counterService.counter)
  }
}

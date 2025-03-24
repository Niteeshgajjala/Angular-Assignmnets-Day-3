import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  standalone: true
})
export class CounterComponent {
  count = 0;
  @Output() counterChanged = new EventEmitter<number>(); 

  increment() {
    this.count++;
    this.counterChanged.emit(this.count);
  }

  decrement() {
    this.count--;
    this.counterChanged.emit(this.count);
  }
}

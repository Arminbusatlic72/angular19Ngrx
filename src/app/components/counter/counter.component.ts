import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from './store/counter.actions';
import { selectCount } from './store/counter.selectors';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  $count!: Observable<number>;

  constructor(private store: Store) {
    this.$count = this.store.select(selectCount);
  }

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }
}

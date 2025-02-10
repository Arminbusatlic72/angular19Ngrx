import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCount } from '../counter/store/counter.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter-display',
  imports: [CommonModule],
  templateUrl: './counter-display.component.html',
  styleUrl: './counter-display.component.css',
})
export class CounterDisplayComponent {
  counter$!: Observable<number>;
  constructor(private store: Store) {
    this.counter$ = this.store.select(selectCount);
  }
}

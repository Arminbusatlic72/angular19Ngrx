import { Component } from '@angular/core';

import { CounterComponent } from './components/counter/counter.component';
import { CounterDisplayComponent } from './components/counter-display/counter-display.component';

@Component({
  selector: 'app-root',
  imports: [CounterComponent, CounterDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular19Ngrx';
}

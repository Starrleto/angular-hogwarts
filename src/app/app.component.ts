import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HarrypotterComponent } from './components/harrypotter/harrypotter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HarrypotterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'API Thing';
}

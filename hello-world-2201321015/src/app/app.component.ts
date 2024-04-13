import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatExpansionModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world-2201321015';
  aboutMe = 'My name is Todor';
  hobbies = 'Programming';
  link = 'https://www.youtube.com/@Formula1';
  info = 'This channel is about programming';
  valuation = '100 lv';
  panelOpenState = false;
}

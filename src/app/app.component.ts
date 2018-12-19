import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'paisagyaan';

  onClick() {
    const s: String = 'Hello World';
    console.log('value of s is ' + s);
  }
}

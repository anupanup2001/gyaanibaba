import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tslint:disable-next-line:one-line
  currentSelection = 'goalplanner';
  constructor(private http: HttpClient){}
  title = 'hello paisagyaan!';
  api = 'Uninitialized';

  selectTab(tab: string) {
    this.currentSelection = tab;
  }
}

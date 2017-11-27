import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tslint:disable-next-line:one-line
  constructor(private http: HttpClient){}
  title = 'hello paisagyaan!';
  api = 'Uninitialized';

  onGoalClick() {
    this.http.get('/api/').subscribe( data => {
      this.api = data['message'];
    });
  }
}

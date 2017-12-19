import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tslint:disable-next-line:one-line
  currentSelection = 'goalplanner';
  constructor(private http: HttpClient, public afAuth: AngularFireAuth) {}
  title = 'hello paisagyaan!';
  api = 'Uninitialized';

  selectTab(tab: string) {
    this.currentSelection = tab;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}

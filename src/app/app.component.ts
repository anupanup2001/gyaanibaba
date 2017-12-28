import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  // tslint:disable-next-line:one-line
  currentSelection = 'home';
  JSON: any;
  constructor(private http: HttpClient, public afAuth: AngularFireAuth) {
    this.JSON = JSON;
  }
  title = 'hello paisagyaan!';

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

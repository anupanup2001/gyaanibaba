import { Component, OnInit, NgZone } from '@angular/core';
import { Goal, SIP, FundType } from './goal.model';
import { HttpClient } from '@angular/common/http';

declare var gapi: any;
@Component({
  selector: 'app-goalplanner',
  templateUrl: './goalplanner.component.html',
  styleUrls: ['./goalplanner.component.css']
})
export class GoalplannerComponent implements OnInit {
  goals: Goal[] = new Array<Goal>();
  message: String;
  googleUser: any;

  constructor(ngZone: NgZone, private http: HttpClient) {
    window['onSignIn'] = (user) => ngZone.run(() => this.onSignIn(user));
    const goal = new Goal('Emergency Fund', 12 + Math.round(Math.random() * 36),
    40000 + Math.round(Math.random() * 40000));
    goal.currentSIPs.push(new SIP(0, 0, 0, FundType.Equity));
    goal.goalSIP = new SIP(0, 0);
    this.goals.push( goal);
  }

  ngOnInit() {
  }

  addGoal() {
    const goal = new Goal('Goal ' + (this.goals.length + 1), 12 + Math.round(Math.random() * 36),
      40000 + Math.round(Math.random() * 40000));
    goal.currentSIPs.push(new SIP(0, 0, 0, FundType.Equity));
    goal.goalSIP = new SIP(0, 0);
    this.goals.push(goal);
  }

  onSignIn(googleUser) {
    this.googleUser = googleUser;
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  logOut() {
    const auth2 = gapi.auth2.getAuthInstance();

    if (auth2.isSignedIn.get()) {
      const profile = auth2.currentUser.get().getBasicProfile();
      console.log('ID: ' + profile.getId());
      console.log('Full Name: ' + profile.getName());
      console.log('Given Name: ' + profile.getGivenName());
      console.log('Family Name: ' + profile.getFamilyName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());
    }

    auth2.signOut().then(() => console.log('User logged out'));
  }

  validateUser() {
    const auth2 = gapi.auth2.getAuthInstance();
    const id_token = this.googleUser.getAuthResponse().id_token;
    console.log(id_token);
    this.http.post('/api/validate_user', {'id_token': id_token}).subscribe( data => console.log(data));
 }

}

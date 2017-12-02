import { Component, OnInit } from '@angular/core';
import { Goal, SIP, FundType } from './goal.model';

@Component({
  selector: 'app-goalplanner',
  templateUrl: './goalplanner.component.html',
  styleUrls: ['./goalplanner.component.css']
})
export class GoalplannerComponent implements OnInit {
  goals: Goal[] = new Array<Goal>();
  constructor() {
    const goal = new Goal('Emergency Fund', 12 + Math.round(Math.random() * 36),
    40000 + Math.round(Math.random() * 40000));
    goal.currentSIPs.push(new SIP(40000, 0, 0, FundType.Equity));
    goal.goalSIP = new SIP(0, Math.round(Math.random() * (10000)));
    this.goals.push( goal);
  }

  ngOnInit() {
  }

  addGoal() {
    const goal = new Goal('Goal ' + (this.goals.length + 1), 12 + Math.round(Math.random() * 36),
      40000 + Math.round(Math.random() * 40000));
    goal.currentSIPs.push(new SIP(40000, 0, 0, FundType.Equity));
    goal.goalSIP = new SIP(20000, Math.round(Math.random() * (10000)));
    this.goals.push(goal);
  }

}

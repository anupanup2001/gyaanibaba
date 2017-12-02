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
    const goal = new Goal();
    goal.goalName = 'Emergency Fund';
    goal.currentSIPs.push(new SIP(40000, 0, 0, FundType.Equity));
    goal.goalSIP = new SIP(0, Math.random() * (10000));
    goal.numOfMonthsToAchieve = 6;
    goal.inflation = 8;
    this.goals.push( goal);
  }

  ngOnInit() {
  }

  addGoal() {
    const goal = new Goal();
    goal.goalName = 'Goal ' + (this.goals.length + 1);
    goal.goalSIP = new SIP(0, Math.random() * (10000));
    this.goals.push(goal);
  }

}

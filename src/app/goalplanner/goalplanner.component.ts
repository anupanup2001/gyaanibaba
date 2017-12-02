import { Component, OnInit } from '@angular/core';
import { Goal } from './goal.model';

@Component({
  selector: 'app-goalplanner',
  templateUrl: './goalplanner.component.html',
  styleUrls: ['./goalplanner.component.css']
})
export class GoalplannerComponent implements OnInit {
  goals: Goal[] = new Array<Goal>();
  constructor() {
    let goal = new Goal();
    goal.goalName = 'Emergency Fund';
    goal.currentValue = 40000;
    goal.numOfMonthsToAchieve = 6;
    goal.inflation = 8;
    this.goals.push( goal);
  }

  ngOnInit() {
  }

  addGoal() {
    let goal = new Goal();
    goal.goalName = 'Goal ' + (this.goals.length + 1);
    this.goals.push(goal);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Goal, SIP } from '../goal.model';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  @Input() goal: Goal;
  constructor() { }

  ngOnInit() {
    console.log('Goal = ' + this.goal);
    console.log(this.goal);
  }

  getCurrentFundValue() {
    let currFundValue = 0;
    for (const currentSIP of this.goal.currentSIPs) {
      currFundValue += currentSIP.currentValue;
    }
    return currFundValue;
  }
  getGoalProgress() {
    return this.getCurrentFundValue() * 100.0 / this.goal.goalTargetValueAsOfToday;
  }

  getGoalProgressPct() {
    return this.getGoalProgress() + '%';
  }

  getInflatedGoalValue() {
    const pv = this.goal.goalTargetValueAsOfToday;
    const r = this.goal.inflation / 100.0 / 12;
    const fv = pv * Math.pow((1 + r), this.goal.numOfMonthsToAchieve);
    return fv;
  }

}

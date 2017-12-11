import { Component, OnInit, Input } from '@angular/core';
import { Goal, SIP, AssumptionVariables } from '../goal.model';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  @Input() goal: Goal;
  abcd = 'acbd';
  showGoalEdit = false;

  assumptionVariables = new AssumptionVariables();
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

  toggleGoalEdit() {
    this.showGoalEdit = !this.showGoalEdit;
  }

  computeSIP() {
    const r = this.assumptionVariables.returnsEquity / 100.0 / 12;
    const fv = this.getInflatedGoalValue();
    const n = this.goal.numOfMonthsToAchieve;
    this.goal.goalSIP.sipValue = (fv / (1 + r)) * (r / (1 - (1 / Math.pow(1 + r, n))));
    return this.goal.goalSIP.sipValue;

  }

}

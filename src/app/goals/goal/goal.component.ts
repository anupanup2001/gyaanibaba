import {Component, Input, OnInit} from '@angular/core';
import {AssumptionVariables, Goal} from '../goal.model';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {
  @Input() goal: Goal;
  assumptionVariables = new AssumptionVariables();
  constructor() { }

  ngOnInit() {
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

  computeSIP() {
    const r = this.assumptionVariables.returnsEquity / 100.0 / 12;
    const fv = this.getInflatedGoalValue();
    const n = this.goal.numOfMonthsToAchieve;
    this.goal.goalSIP.sipValue = (fv / (1 + r)) * (r / (1 - (1 / Math.pow(1 + r, n))));
    return this.goal.goalSIP.sipValue;

  }

}

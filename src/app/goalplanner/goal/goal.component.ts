import { Component, OnInit, Input } from '@angular/core';
import { Goal } from '../goal.model';

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

}

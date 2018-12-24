import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  goals = ['Goal1', 'Goal2'];
  isEdit: boolean;
  constructor() { }

  ngOnInit() {
  }

  addGoal() {
    console.log('Adding goal');
    this.isEdit = true ;
  }

}

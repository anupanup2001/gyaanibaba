import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalplannerComponent } from './goalplanner.component';

describe('GoalplannerComponent', () => {
  let component: GoalplannerComponent;
  let fixture: ComponentFixture<GoalplannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalplannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalplannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

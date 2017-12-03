import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { GoalplannerComponent } from './goalplanner/goalplanner.component';
import { GoalComponent } from './goalplanner/goal/goal.component';


@NgModule({
  declarations: [
    AppComponent,
    GoalplannerComponent,
    GoalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

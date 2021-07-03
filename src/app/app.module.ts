import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeavesComponent } from './leaves/leaves.component';
import { Page404Component } from './page404/page404.component';
import { ProfileComponent } from './profile/profile.component';
import { ApplyComponent } from './leaves/apply/apply.component';
import { BalanceComponent } from './leaves/balance/balance.component';
import { Page404leavesComponent } from './leaves/page404leaves/page404leaves.component';

@NgModule({
  declarations: [
    AppComponent,
    AttendanceComponent,
    DashboardComponent,
    LeavesComponent,
    Page404Component,
    ProfileComponent,
    ApplyComponent,
    BalanceComponent,
    Page404leavesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

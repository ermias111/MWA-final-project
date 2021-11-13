import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home.component';
import { ResultComponent } from './result.component';
import { AdminDashboardComponent } from './admin-dashboard.component';



@NgModule({
  declarations: [
    UserHomeComponent,
    ResultComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }

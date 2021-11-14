import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home.component';
import { ResultComponent } from './result.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserHomeComponent,
    ResultComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'userhome', component:UserHomeComponent },
      {path: 'admindashboard', component: AdminDashboardComponent},
    ])
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home.component';
import { ResultComponent } from './result.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from '../@core/guards';
import { MaterialModule } from '../material/material.module';
import { RacingFormComponent } from './racing-form.component';
import { ResultFormComponent } from './result-form.component';



const routes: Routes = [
  {
    path: 'userhome',
    component: UserHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admindashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'welcome',
    component: WelcomePageComponent
  }
]

@NgModule({
  declarations: [
    UserHomeComponent,
    ResultComponent,
    AdminDashboardComponent,
    WelcomePageComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    RacingFormComponent,
    ResultFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],

  exports: [
    LayoutComponent
  ]
})
export class HomeModule { }

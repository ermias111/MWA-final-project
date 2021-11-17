import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { WelcomePageComponent } from './home/welcome-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login.component';
import { CoreModule } from './@core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomeModule,
    BrowserAnimationsModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'auth', 
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'home', 
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      }
      // {
      //   path: '**', 
      //   component: PageNotFoundComponent 
      // }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  isLoggedIn: Boolean = false;

}

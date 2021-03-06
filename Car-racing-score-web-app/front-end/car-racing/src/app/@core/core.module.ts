import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtInterceptor } from './interceptors';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CheckClickDirective } from './directives/check-click.directive';


@NgModule({
  declarations: [
    CheckClickDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ]
})
export class CoreModule { }

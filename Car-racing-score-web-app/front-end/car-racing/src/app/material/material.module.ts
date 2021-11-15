import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { MatCardModule } from '@angular/material/card';
import  {MatInputModule} from '@angular/material/input';
import  {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'


const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  ReactiveFormsModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: modules
})

export class MaterialModule { }

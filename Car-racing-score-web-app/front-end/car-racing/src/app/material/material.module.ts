import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { MatCardModule } from '@angular/material/card';
import  {MatInputModule} from '@angular/material/input';
import  {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatTabsModule } from '@angular/material/tabs'
import { MatDialogModule } from '@angular/material/dialog'
import { MatTableModule } from '@angular/material/table'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  ReactiveFormsModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatTabsModule,
  MatDialogModule,
  MatTableModule
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
    MatIconModule,
    MatTabsModule,
    MatDialogModule,
    MatTableModule
  ],
  exports: modules
})

export class MaterialModule { }

import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';

import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
// imports: [NgxIntlTelInputModule];
@NgModule({
  imports: [
  CommonModule,
  MatButtonModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatIconModule,
  MatMenuModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatStepperModule,
  MatSelectModule
  ],
  exports: [
  CommonModule,
   MatButtonModule,
   MatInputModule,
   MatDialogModule,
   MatTableModule,
   MatToolbarModule,
   MatFormFieldModule,
   MatIconModule,
   MatMenuModule,
   MatCardModule,
   MatProgressSpinnerModule,
   MatStepperModule,
   MatSelectModule
   ],
})
export class CustomMaterialModule { }


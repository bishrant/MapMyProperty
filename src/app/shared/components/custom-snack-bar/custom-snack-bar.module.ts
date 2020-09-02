import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSnackBarComponent } from './custom-snack-bar.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [CustomSnackBarComponent],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class CustomSnackBarModule { }

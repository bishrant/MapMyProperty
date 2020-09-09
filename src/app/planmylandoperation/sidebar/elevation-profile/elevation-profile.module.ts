import { NgModule } from '@angular/core';
import { ElevationProfileComponent } from './elevation-profile.component';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ElevationProfileService } from 'src/app/shared/services/elevation-profile/elevation-profile.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ElevationProfileComponent],
  imports: [
     
    CommonModule, MatExpansionModule, MatIconModule, MatButtonToggleModule,
    AngularSvgIconModule, MatCheckboxModule, MatButtonModule, MatDialogModule, MatFormFieldModule,
    DragDropModule, MatButtonModule
  ],
  exports: [ElevationProfileComponent],
  providers: [ElevationProfileService]
})
export class ElevationProfileModule { }

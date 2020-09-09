import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ElevationProfileComponent } from './elevation-profile.component';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ElevationProfileComponent],
  imports: [
    CommonModule, MatExpansionModule, MatIconModule, MatButtonToggleModule, 
    AngularSvgIconModule, MatCheckboxModule, MatButtonModule
  ],
  exports: [ElevationProfileComponent]
})
export class ElevationProfileModule {}

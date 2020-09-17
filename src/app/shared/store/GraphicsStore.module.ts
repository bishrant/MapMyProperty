import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicsStoreComponent } from './GraphicsStore.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [GraphicsStoreComponent],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatButtonToggleModule,
    MatTooltipModule
  ],
  exports: [GraphicsStoreComponent]
})
export class GraphicsStoreModule {}

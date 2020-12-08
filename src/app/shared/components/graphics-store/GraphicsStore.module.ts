import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicsStoreComponent } from './GraphicsStore.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [GraphicsStoreComponent],
  imports: [
    CommonModule,
    AngularSvgIconModule
  ],
  exports: [GraphicsStoreComponent]
})
export class GraphicsStoreModule {}

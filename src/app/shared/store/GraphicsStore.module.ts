import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicsStoreComponent } from './GraphicsStore.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [GraphicsStoreComponent],
  imports: [CommonModule, MatIconModule],
  exports: [GraphicsStoreComponent],
})
export class GraphicsStoreModule {}

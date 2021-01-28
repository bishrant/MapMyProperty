import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VegetationTableComponent } from './vegetation-table.component';

@NgModule({
  declarations: [VegetationTableComponent],
  imports: [
    CommonModule
  ],
  exports: [VegetationTableComponent],
  providers: []
})
export class VegetationTableModule { }

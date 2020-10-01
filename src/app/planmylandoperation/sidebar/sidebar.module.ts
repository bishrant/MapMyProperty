import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { SoilsTableComponent } from './soils/soils-table/soils-table.component';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }

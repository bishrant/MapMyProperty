import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportExportHelpComponent } from './import-export-help.component';



@NgModule({
  declarations: [ImportExportHelpComponent],
  imports: [
    CommonModule
  ],
  exports: [ImportExportHelpComponent]
})
export class ImportExportHelpModule { }

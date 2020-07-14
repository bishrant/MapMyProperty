import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportExportComponent } from './ImportExport.component';
import { MatRadioModule } from "@angular/material/radio";

@NgModule({
  declarations: [ImportExportComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
  ],
  exports: [ImportExportComponent],
})
export class ImportExportModule {}

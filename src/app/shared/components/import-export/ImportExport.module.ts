import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportExportComponent } from './ImportExport.component';
import { MatRadioModule } from "@angular/material/radio";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ImportExportComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
  ],
  exports: [ImportExportComponent],
})
export class ImportExportModule {}

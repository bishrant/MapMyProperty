import { ZipService } from './../../services/zip.service';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportExportComponent } from './ImportExport.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { HelpbuttonModule } from '../help-button/help-button.module';

@NgModule({
  providers: [ZipService],
  declarations: [ImportExportComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    HelpbuttonModule
  ],
  exports: [ImportExportComponent]
})
export class ImportExportModule {}

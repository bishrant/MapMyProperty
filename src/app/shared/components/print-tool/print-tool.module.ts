import { InfobuttonModule } from '../infobutton/infobutton.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintToolComponent, } from './print-tool.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MapPrintPreviewDialog, PrintToolLoadingComponent } from './map-dialog.componenet';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
  declarations: [PrintToolComponent, MapPrintPreviewDialog, PrintToolLoadingComponent],
  imports: [
    CommonModule,
    InfobuttonModule,
    MatExpansionModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    OverlayModule,
    LoaderModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  exports: [PrintToolComponent],
  entryComponents: [MapPrintPreviewDialog, PrintToolLoadingComponent]
})
export class PrintToolModule { }

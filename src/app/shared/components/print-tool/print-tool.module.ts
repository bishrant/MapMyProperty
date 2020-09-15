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
import { OverlayModule } from '@angular/cdk/overlay';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MapPrintPreviewDialog, PrintToolLoadingComponent } from './map-dialog.componenet';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoaderModule } from '../loader/loader.module';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ModalModule } from '../../lib/angular-modal/modal/modal-module';

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
    OverlayModule,
    LoaderModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatCheckboxModule,
    ModalModule
  ],
  exports: [PrintToolComponent],
  entryComponents: [MapPrintPreviewDialog, PrintToolLoadingComponent]
})
export class PrintToolModule { }

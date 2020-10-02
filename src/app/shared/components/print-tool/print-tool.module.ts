import { InfobuttonModule } from '../infobutton/infobutton.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintToolComponent, } from './print-tool.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatToolbarModule } from '@angular/material/toolbar';
// import {  PrintToolLoadingComponent } from './map-dialog.componenet';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderModule } from '../loader/loader.module';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from '../../lib/angular-modal/modal/modal-module';
import { AccordionPanelModule } from '../accordion-panel/accordion.panel.module';

@NgModule({
  declarations: [PrintToolComponent],
  imports: [
    CommonModule,
    InfobuttonModule,
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
    ModalModule,
    AccordionPanelModule
  ],
  exports: [PrintToolComponent],
  // entryComponents: [ PrintToolLoadingComponent]
})
export class PrintToolModule { }

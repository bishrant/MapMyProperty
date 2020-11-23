import { InfobuttonModule } from '../infobutton/infobutton.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintToolComponent, } from './print-tool.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderModule } from '../loader/loader.module';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from '../../lib/angular-modal/modal/modal-module';
import { AccordionPanelModule } from '../accordion-panel/accordion.panel.module';
import { HelpbuttonModule } from '../help-button/help-button.module';

@NgModule({
  declarations: [PrintToolComponent],
  imports: [
    CommonModule,
    InfobuttonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    LoaderModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule,
    AccordionPanelModule,
    HelpbuttonModule
  ],
  exports: [PrintToolComponent],
})
export class PrintToolModule { }

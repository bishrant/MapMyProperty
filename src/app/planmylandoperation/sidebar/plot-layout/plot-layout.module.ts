import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotLayoutComponent } from './plot-layout.component';
import { HelpbuttonModule } from 'src/app/shared/components/help-button/help-button.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PlotLayoutComponent],
  imports: [
    CommonModule,
    HelpbuttonModule,
    FormsModule
  ],
  exports: [PlotLayoutComponent]
})
export class PlotLayoutModule { }

import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { InfobuttonModule } from './../infobutton/infobutton.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { PointcontrolComponent } from './pointcontrol.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PointcontrolComponent],
  imports: [CommonModule, InfobuttonModule, MatSliderModule, FormsModule, MatFormFieldModule, MatInputModule],
  exports: [PointcontrolComponent],
})
export class PointcontrolModule {}

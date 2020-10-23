import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ModalModule } from 'src/app/shared/lib/angular-modal/modal/modal-module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CulvertSizeService } from 'src/app/shared/services/culvert-size.service';
import { MMPThemesComponent } from './themes.component';
import { InfobuttonModule } from 'src/app/shared/components/infobutton/infobutton.module';
import { SliderModule } from 'src/app/shared/components/slider/slider.module';

@NgModule({
  declarations: [MMPThemesComponent],
  imports: [
    CommonModule, MatFormFieldModule, FormsModule, ModalModule, FontAwesomeModule, InfobuttonModule, SliderModule
  ],
  exports: [MMPThemesComponent],
  providers: [CulvertSizeService]
})
export class MMPThemesModule { }

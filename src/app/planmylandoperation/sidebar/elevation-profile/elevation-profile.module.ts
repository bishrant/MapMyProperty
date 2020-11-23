import { NgModule } from '@angular/core';
import { ElevationProfileComponent } from './elevation-profile.component';
import { CommonModule } from '@angular/common';
import { ElevationProfileService } from 'src/app/shared/services/elevation-profile/elevation-profile.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ModalModule } from 'src/app/shared/lib/angular-modal/modal/modal-module';
import { FormsModule } from '@angular/forms';
import { HelpbuttonModule } from 'src/app/shared/components/help-button/help-button.module';

@NgModule({
  declarations: [ElevationProfileComponent],
  imports: [
    CommonModule, MatFormFieldModule, FormsModule, ModalModule, HelpbuttonModule
  ],
  exports: [ElevationProfileComponent],
  providers: [ElevationProfileService]
})
export class ElevationProfileModule { }

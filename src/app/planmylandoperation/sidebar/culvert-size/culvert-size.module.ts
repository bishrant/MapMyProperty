import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ModalModule } from 'src/app/shared/lib/angular-modal/modal/modal-module';
import { FormsModule } from '@angular/forms';
import { CulvertSizeComponent } from './culvert-size.component';
import { CulvertSizeService } from 'src/app/shared/services/culvert-size.service';
import { HelpbuttonModule } from 'src/app/shared/components/help-button/help-button.module';

@NgModule({
  declarations: [CulvertSizeComponent],
  imports: [
    CommonModule, MatFormFieldModule, FormsModule, ModalModule, HelpbuttonModule
  ],
  exports: [CulvertSizeComponent],
  providers: [CulvertSizeService]
})
export class CulvertSizeModule { }

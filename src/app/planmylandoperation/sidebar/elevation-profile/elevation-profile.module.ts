import { NgModule } from '@angular/core';
import { ElevationProfileComponent } from './elevation-profile.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ElevationProfileService } from 'src/app/shared/services/elevation-profile/elevation-profile.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ModalModule } from 'src/app/shared/lib/angular-modal/modal/modal-module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ElevationProfileComponent],
  imports: [
    CommonModule, MatIconModule,
    AngularSvgIconModule, MatDialogModule, MatFormFieldModule, FormsModule,
    DragDropModule, ModalModule
  ],
  exports: [ElevationProfileComponent],
  providers: [ElevationProfileService]
})
export class ElevationProfileModule { }

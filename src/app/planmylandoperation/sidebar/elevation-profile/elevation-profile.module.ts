import { NgModule } from '@angular/core';
import { ElevationProfileComponent } from './elevation-profile.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MatButtonModule } from '@angular/material/button';
import { ElevationProfileService } from 'src/app/shared/services/elevation-profile/elevation-profile.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ModalModule } from 'src/app/shared/lib/angular-modal/modal/modal-module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ElevationProfileComponent],
  imports: [
    CommonModule, MatIconModule, MatButtonToggleModule,
    AngularSvgIconModule, MatButtonModule, MatDialogModule, MatFormFieldModule, FormsModule,
    DragDropModule, MatButtonModule, ModalModule
  ],
  exports: [ElevationProfileComponent],
  providers: [ElevationProfileService]
})
export class ElevationProfileModule { }

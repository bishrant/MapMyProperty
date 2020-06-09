import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';
import { DialogService } from './dialog.service';



@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [DialogComponent],
  entryComponents: [DialogComponent],
  providers: [DialogService, MatDialog]
})
export class DialogsModule { }

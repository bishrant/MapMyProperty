import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';
import { DialogService } from './dialog.service';
import { MatButtonModule, MatButton } from '@angular/material/button';

@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [DialogComponent],
  entryComponents: [DialogComponent],
  providers: [DialogService, MatDialog, MatButton]
})
export class DialogsModule { }

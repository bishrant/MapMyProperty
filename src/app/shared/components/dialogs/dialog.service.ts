import { Injectable } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';


@Injectable({providedIn: 'root'})
export class DialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  dialogRef: MatDialogRef<DialogComponent>;

  public open(options) {
    this.dialogRef = this.dialog.open(DialogComponent, {
      data: {
        message: options.message
      }
    })
  };
}

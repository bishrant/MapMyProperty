import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';


@Injectable({providedIn: 'root'})
export class DialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  dialogRef: MatDialogRef<DialogComponent>;

  public open(options: any) {
    this.dialogRef = this.dialog.open(DialogComponent, {
      data: {
        message: options.message
      }
    })
  };
}

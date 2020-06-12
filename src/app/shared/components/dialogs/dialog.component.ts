import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent {
  constructor(
      @Inject(MAT_DIALOG_DATA) public data: {
          message: string
      },
      private mdDialogRef: MatDialogRef<DialogComponent>
  ){}

  close(): void {
    this.mdDialogRef.close(false);
  }
}
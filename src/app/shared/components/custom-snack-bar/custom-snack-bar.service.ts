import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { CustomSnackBarComponent } from './custom-snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class CustomSnackBarService {

  snackBarRef: MatSnackBarRef<CustomSnackBarComponent>

  constructor(
    private snackBar: MatSnackBar
  ) { }

  public open(data: any): void {
    this.snackBar.openFromComponent(CustomSnackBarComponent, {data: data});
  }

  public close(): void {
    this.snackBar.dismiss();
  }
}

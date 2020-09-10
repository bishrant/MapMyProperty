import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MapPrintPreviewDialog } from './map-dialog.componenet';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl, FormGroupDirective, NgForm, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-print-tool',
  templateUrl: './print-tool.component.html',
  styleUrls: ['./print-tool.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PrintToolComponent implements OnInit {
  @Input() map: any;
  printForm: FormGroup;
  MAX: number = 200;
  MAXLINES: number = 5;
  showCurrentDate = true;
  constructor(public dialog: MatDialog, private formBuilder: FormBuilder) { }
  matcher = new MyErrorStateMatcher();
  showPrintMapPreview(): void {
    const dialogRef = this.dialog.open(MapPrintPreviewDialog, {
      width: window.innerWidth > 1024 ? '600px' : '300px',
      data: {esriMap: this.map, comments: this.printForm.get('comments')?.value, 
      title: this.printForm.get('title')?.value, showCurrentDate: this.showCurrentDate}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The map preview dialog was closed');
    });
  }



  ngOnInit(): void {
    this.printForm = this.formBuilder.group({
      title: [''],
      comments: ['', { validators: [ValidateCommentsLength(this.MAX), ValidateLineBreaks(this.MAXLINES)], updateOn: 'change' }],
    })
  }

  get comments() { return this.printForm.get('comments') }
}

export function ValidateCommentsLength(MAX: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value && control.value.length > MAX) {
      return { 'commentsInvalid': true }; // return object if the validation is not passed.
    }
    return null;
  }
}

export function ValidateLineBreaks(MAXLINES: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value && control.value.split("\n").length > MAXLINES) {
      return { 'commentsLineBreaksInvalid': true }; // return object if the validation is not passed.
    }
    return null;
  }
}

import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && control.dirty);
  }
}
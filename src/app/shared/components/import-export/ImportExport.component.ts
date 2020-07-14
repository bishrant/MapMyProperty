import { updateGraphics, addGraphics } from '../../store/graphics.actions';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AppState } from 'src/app/shared/store/graphics.state';
import { Store } from '@ngrx/store';

@Component({
  selector: "app-import-export",
  templateUrl: "./ImportExport.component.html",
  styleUrls: ["./ImportExport.component.scss"],
})
export class ImportExportComponent implements OnInit {
  constructor(private store: Store<AppState>) { }
  ngOnInit() { }

  export() {
    console.log('export');
    const graphics$ = this.store.select((state: any) => state.app.graphics);
    this.store.select(s => {
      console.log(s);
    })
  }
}

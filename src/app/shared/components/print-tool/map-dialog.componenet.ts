import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import MapView from 'esri/views/MapView';
import Map from "arcgis-js-api/Map";

@Component({
    selector: 'map-dialog',
    templateUrl: 'map-dialog.component.html',
    styleUrls: ['./print-tool.component.scss'],
})
export class MapPrintPreviewDialog implements OnInit {
    @ViewChild("mapViewNode", { static: true }) private mapViewEl: ElementRef;
    view: any;
    data: any;
    constructor(public dialogRef: MatDialogRef<MapPrintPreviewDialog>, @Inject(MAT_DIALOG_DATA) private _data: any, public dialog: MatDialog) {
        this.data = _data;
    }

    close(): void {
        this.dialogRef.close();
    }

    async initializeMap() {
        console.log(this.data);
        const _map = this.data.map;
        try {
            // Configure the Map
            const mapProperties: any = {
                basemap: _map.basemap.id,
                layers: _map.layers
            };

            const map = new Map(mapProperties);


            // Initialize the MapView
            const mapViewProperties: any = {
                container: this.mapViewEl.nativeElement,
                map: map
            };

            this.view = new MapView(mapViewProperties);
            this.view.extent = this.data.extent;
            return this.view;
        } catch (error) {
            console.log("Esri: ", error);
        }
    }

    ngOnInit() {
        this.initializeMap();
    }

    ngOnDestroy() {
        if (this.view) {
            // destroy the map view
            this.view.container = null;
        }
    }

    generatePDF() {
        const dialogRef = this.dialog.open(PrintToolLoadingComponent, {
          width: window.innerWidth > 1024 ? '600px': '300px',
          disableClose: true      
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The map preview dialog was closed');
        });
      }

}

@Component({
    selector: 'app-print-loading',
    template: `
    <div><mat-spinner color="primary"></mat-spinner>Loading...</div>
    `,
    styles: [`div{color: red}`]
  })
  export class PrintToolLoadingComponent implements OnInit {
    constructor(public dialog: MatDialog) {}
    ngOnInit (): void {  }
  }
  
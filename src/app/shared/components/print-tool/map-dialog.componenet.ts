import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import MapView from 'esri/views/MapView';
import Map from "arcgis-js-api/Map";
import PrintTask from 'esri/tasks/PrintTask';
import PrintParameters from 'esri/tasks/support/PrintParameters';
import { TraceGPError } from '../../services/error/GPServiceError';
import { AppConfiguration } from 'src/config';

@Component({
    selector: 'map-dialog',
    templateUrl: 'map-dialog.component.html',
    styleUrls: ['./print-tool.component.scss'],
})
export class MapPrintPreviewDialog implements OnInit {
    @ViewChild("mapViewNode", { static: true }) private mapViewEl: ElementRef;
    view: any;
    data: any;
    // printTask = new PrintTask({url: 'https://tfsgis-dfe02.tfs.tamu.edu/arcgis/rest/services/Shared/PrintPro_no_rotate/GPServer/PrintUsingPro'});
    printTask = new PrintTask({ url: this.config.printGPServiceURL });
    constructor(public dialogRef: MatDialogRef<MapPrintPreviewDialog>, @Inject(MAT_DIALOG_DATA) private _data: any,
        public dialog: MatDialog, private config: AppConfiguration) {
        this.data = this._data;
    }

    close(): void {
        this.dialogRef.close();
    }

    async initializeMap() {
        console.log(this.data);
        const _map = this.data.esriMap.map;
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
            this.view.extent = this.data.esriMap.extent;
            return this.view;
        } catch (error) {
            console.log("Esri: ", error);
        }
    }

    ngOnInit() {
        this.initializeMap();
        throw new Error("Type Error: Expecting point geometry got polygon")
    }

    ngOnDestroy() {
        if (this.view) {
            // destroy the map view
            this.view.container = null;
        }
    }

    generatePDF() {
        const dialogRef = this.dialog.open(PrintToolLoadingComponent, {
            width: window.innerWidth > 1024 ? '600px' : '300px',
            disableClose: false
        });
        dialogRef.afterClosed().subscribe((result: any) => {
            console.log('The map preview dialog was closed');
        });
        console.log(this.data);
        const printParameters = new PrintParameters({
            view: this.view,
            extraParameters: {
                title: this.data.title,
                comments: this.data.comment
            }
        });

        this.printTask.execute(printParameters)
            .then((success: any) => {
                console.log(success.url);
                window.open(success.url, '_blank');
                dialogRef.close();
            })
            .catch((error: any) => {
                let gpError = TraceGPError(this.config.printGPServiceURL, error);
                throw gpError;
            });

    }

}

@Component({
    selector: 'app-print-loading',
    template: `<app-loader></app-loader>`
})
export class PrintToolLoadingComponent implements OnInit {
    constructor(public dialog: MatDialog) { }
    ngOnInit(): void { }
}

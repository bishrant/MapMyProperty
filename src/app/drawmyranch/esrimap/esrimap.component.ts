import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

import { CreateLineSymbol } from 'src/app/shared/utils/GraphicStyles';
import { CreatePolygonGraphicsLayer } from 'src/app/shared/maputils/CreateGraphicsLayer';
import Graphic from 'esri/Graphic';
import { GraphicsState } from 'src/app/shared/store/graphics.state';
import { GraphicsStoreComponent } from 'src/app/shared/store/GraphicsStore.component';
import { SetupSketchViewModel } from 'src/app/shared/maputils/SketchViewModelUitls';
import SketchViewModel from 'esri/widgets/Sketch/SketchViewModel';
import { Store } from '@ngrx/store';
import { addGraphics } from 'src/app/shared/store/graphics.actions';
import createMapView from 'src/app/shared/maputils/CreateMapView';
import { updateGraphics } from 'src/app/shared/store/graphics.actions';

import E = __esri;

@Component({
  selector: 'app-esrimap',
  templateUrl: './esrimap.component.html',
  styleUrls: ['./esrimap.component.scss'],
})
export class EsrimapComponent {}

import { AfterViewInit, Component, Input } from '@angular/core';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import SketchViewModel from '@arcgis/core/widgets/Sketch/SketchViewModel';
import { Store } from '@ngrx/store';
import { removeAllGraphics, removeGraphics } from '../../store/graphics.actions';
import { AppState } from '../../store/graphics.state';

@Component({
  selector: 'app-graphic-store',
  templateUrl: './GraphicsStore.component.html',
  styleUrls: ['./GraphicsStore.component.scss']
})
export class GraphicsStoreComponent implements AfterViewInit {
  @Input('sketchVM') sketchVM: SketchViewModel;
  @Input('textGraphicsLayer') textGraphicsLayer: GraphicsLayer;
  readonly disableUndo$ = this.store.select((state) => !state.app.canUndo);
  readonly disableRedo$ = this.store.select((state) => !state.app.canRedo);

  selectedGraphics: any[] = [];
  constructor (private readonly store: Store<AppState>) { }

  initSketchVMUpdate = () => {
    this.sketchVM.on('update', (gg: any) => {
      if (gg.state === 'cancel' || gg.aborted) {
        this.selectedGraphics = [];
      } else if (gg.state === 'start' || gg.state === 'active') {
        this.selectedGraphics = gg.graphics;
      } else if (gg.state === 'complete') {
        this.selectedGraphics = [];
      }
    })
  }

  ngAfterViewInit () {
    this.initSketchVMUpdate();
  }

  fillSvgStyle = {
    'width.px': 20,
    fill: 'white'
  };

  undo (): void {
    this.sketchVM.undo();
    if (this.sketchVM.state !== 'active') {
      this.store.dispatch({ type: 'UNDO' });
    }
  }

  deleteAll (): void {
    const r = confirm('Are you sure you want to delete all graphics/drawings?');
    if (r === true) {
      this.store.dispatch(removeAllGraphics());
    }
  }

  delete (): void {
    const ids = this.selectedGraphics.map((gg) => gg.attributes.id);
    this.store.dispatch(removeGraphics({ ids }));
  }

  redo (): void {
    if (this.sketchVM.state === 'active') {
      this.sketchVM.redo();
    } else {
      this.store.dispatch({ type: 'REDO' });
    }
  }

  startEditing = () => {
    if (this.sketchVM.activeTool === 'reshape') {
      this.sketchVM.complete();
    } else {
      this.sketchVM.update(this.selectedGraphics, {
        tool: 'reshape'
      });
    }
  };
}

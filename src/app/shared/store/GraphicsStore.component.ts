import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { GraphicsState } from './graphics.state';
import { removeGraphics } from './graphics.actions';

@Component({
  selector: 'app-graphic-store',
  templateUrl: './GraphicsStore.component.html',
  styleUrls: ['./GraphicsStore.component.scss']
})
export class StoreComponent {
  @Input('sketchVM') sketchVM: any;
  // readonly graphics$ = this.store.select(state => state.app.graphics);

  readonly disableUndo$ = this.store.select(state => !state.app.canUndo);

  readonly disableRedo$ = this.store.select(state => !state.app.canRedo);

  constructor(private readonly store: Store<GraphicsState>) {}
  // @Output() undoAction = new EventEmitter<any>();

  remove({id}: any): void {
    this.store.dispatch(removeGraphics({id}));
  }

  undo(): void {
    // console.log(this.sketchVM);
    // if (this.sketchVM.state === 'ready') {
    //   this.sketchVM.layer.graphics.pop();
    // }
    // if (this.sketchVM.state === 'active') {
    this.sketchVM.undo();
    // if (this.sketchVM.state !== 'active'){
    // this.store.dispatch({type: 'UNDO'});
    // }
  }

  redo(): void {
    // console.log(this.sketchVM);
    if (this.sketchVM.state === 'active') {
      this.sketchVM.redo();
    } else {
      this.store.dispatch({type: 'REDO'});
    }
    
    
  }
}

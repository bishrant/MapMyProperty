import { Component, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { GraphicsState } from './graphics.state';
import { addGraphics, removeGraphics } from './graphics.actions';

@Component({
  selector: 'app-stores',
  templateUrl: './Store.component.html',
  styleUrls: ['./Store.component.scss']
})
export class StoreComponent {

  readonly graphics$ = this.store.select(state => state.app.graphics);

  readonly disableUndo$ = this.store.select(state => !state.app.canUndo);

  readonly disableRedo$ = this.store.select(state => !state.app.canRedo);

  constructor(private readonly store: Store<GraphicsState>) {
      this.graphics$.subscribe(f => console.log(f));
  }

  // tslint:disable-next-line:no-input-rename
  @Input('sketchVM') sketchVM: any;
  @Input('t') t: any;
  // @Input('account-id') id: string;

  // @Output() undoAction = new EventEmitter<any>();
  add(text: string): void {
    this.store.dispatch(addGraphics({payload: text}));
  }

  remove({id}: any): void {
    this.store.dispatch(removeGraphics({id}));
  }

  undo(): void {

    console.log(this.sketchVM);
    if (this.sketchVM.state === 'ready') {
      this.store.dispatch({type: 'DELETE'});
      this.sketchVM.layer.graphics.pop();
    }
    this.sketchVM.undo();

    this.store.dispatch({type: 'UNDO'});
  }

  redo(): void {
    this.store.dispatch({type: 'REDO'});
  }
}

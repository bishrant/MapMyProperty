import { Component } from '@angular/core';
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

  add(text: string): void {
    this.store.dispatch(addGraphics({payload: text}));
  }

  remove({id}: any): void {
    this.store.dispatch(removeGraphics({id}));
  }

  undo(): void {
    this.store.dispatch({type: 'UNDO'});
  }

  redo(): void {
    this.store.dispatch({type: 'REDO'});
  }
}

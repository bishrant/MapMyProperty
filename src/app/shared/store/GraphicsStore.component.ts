import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { GraphicsState } from "./graphics.state";
import { removeGraphics } from "./graphics.actions";

@Component({
  selector: "app-graphic-store",
  templateUrl: "./GraphicsStore.component.html",
  styleUrls: ["./GraphicsStore.component.scss"]
})
export class StoreComponent {
  @Input("sketchVM") sketchVM: any;
  @Input("selectedGraphics") selectedGraphics: any[] = [];
  // readonly graphics$ = this.store.select(state => state.app.graphics);
  readonly disableUndo$ = this.store.select(state => !state.app.canUndo);
  readonly disableRedo$ = this.store.select(state => !state.app.canRedo);
  constructor(private readonly store: Store<GraphicsState>) {}

  undo(): void {
    // console.log(this.sketchVM);
    // if (this.sketchVM.state === 'ready') {
    //   this.sketchVM.layer.graphics.pop();
    // }
    // if (this.sketchVM.state === 'active') {
    this.sketchVM.undo();
    if (this.sketchVM.state !== "active") {
      this.store.dispatch({ type: "UNDO" });
    }
  }

  delete(): void {
    console.log(this.selectedGraphics);
    const gids = this.selectedGraphics.map(gg => gg.attributes.gid);
    console.log(gids);
    this.store.dispatch(removeGraphics({ gids }));
    // this.store.dispatch()
  }
  redo(): void {
    // console.log(this.sketchVM);
    if (this.sketchVM.state === "active") {
      this.sketchVM.redo();
    } else {
      this.store.dispatch({ type: "REDO" });
    }
  }

  startEditing = () => {
    this.sketchVM.update(this.selectedGraphics, {
      tool: "reshape"
    });
  };
}

import { Component, Input, HostListener } from "@angular/core";
import { Store } from "@ngrx/store";
import { GraphicsState } from "./graphics.state";
import { removeGraphics, removeAllGraphics } from "./graphics.actions";

@Component({
  selector: "app-graphic-store",
  templateUrl: "./GraphicsStore.component.html",
  styleUrls: ["./GraphicsStore.component.scss"]
})
export class StoreComponent {
  @Input("sketchVM") sketchVM: __esri.SketchViewModel;
  @Input("selectedGraphics") selectedGraphics: any[] = [];
  // readonly graphics$ = this.store.select(state => state.app.graphics);
  readonly disableUndo$ = this.store.select(state => !state.app.canUndo);
  readonly disableRedo$ = this.store.select(state => !state.app.canRedo);
  constructor(private readonly store: Store<GraphicsState>) {}
  
  undo(): void {
    this.sketchVM.undo();
    if (this.sketchVM.state !== "active") {
      this.store.dispatch({ type: "UNDO" });
    }
  }

  deleteAll(): void {
    console.log("delete all map graphics");
    this.store.dispatch(removeAllGraphics());
  }
  delete(): void {
    const gids = this.selectedGraphics.map(gg => gg.attributes.gid);
    this.store.dispatch(removeGraphics({ gids }));
  }
  redo(): void {
    if (this.sketchVM.state === "active") {
      this.sketchVM.redo();
    } else {
      this.store.dispatch({ type: "REDO" });
    }
  }

  startEditing = () => {
    if (this.sketchVM.activeTool === "reshape") {
      this.sketchVM.complete();
    } else {
      this.sketchVM.update(this.selectedGraphics, {
        tool: "reshape"
      });
    }
  };
}

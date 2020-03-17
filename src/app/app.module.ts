import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { GraphicsReducer } from './shared/store/graphics.reducer';
import { StoreComponent } from './shared/store/Store.component';
// import { GraphicsReducer } from './shared/store/store';

@NgModule({
  declarations: [
    AppComponent, StoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({app: GraphicsReducer}),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent, StoreComponent]
})
export class AppModule { }

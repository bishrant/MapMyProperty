import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { GraphicsReducer } from './shared/store/graphics.reducer';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HeaderModule } from './shared/components/header/header.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GlobalErrorHandler } from './shared/services/error/GlobalErrorHandler';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HeaderModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ app: GraphicsReducer }),
    AngularSvgIconModule.forRoot(),
    NgxSpinnerModule,
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    FontAwesomeModule,
    MatSnackBarModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: GlobalErrorHandler}, 
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {horizontalPosition: 'end', verticalPosition: 'top'}}],
  bootstrap: [AppComponent],
  exports: [HeaderModule, MatIconModule, MatButtonModule, MatTooltipModule, FlexLayoutModule]
})
export class AppModule {}

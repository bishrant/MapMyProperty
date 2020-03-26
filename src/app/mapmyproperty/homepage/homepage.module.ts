import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage.component';
import { Routes, RouterModule } from '@angular/router';
import { EsrimapComponent } from '../esrimap/esrimap.component';
import { StoreComponent } from '../../shared/store/GraphicsStore.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatExpansionModule } from "@angular/material/expansion";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ColorPickerModule } from '../../shared/components/color-picker/color-picker.module';
import { MatSliderModule } from '@angular/material/slider';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    // loadChildren: () => import('../esrimap/esrimap.module').then(m => m.EsrimapModule)
  }
];

@NgModule({
  declarations: [
    EsrimapComponent,
    HomepageComponent,
    StoreComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatSliderModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    AngularSvgIconModule,
    ColorPickerModule
  ],
  exports: [RouterModule]
})
export class HomepageModule {}


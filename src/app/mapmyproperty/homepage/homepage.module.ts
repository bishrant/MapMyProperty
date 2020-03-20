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

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    // loadChildren: () => import('../esrimap/esrimap.module').then(m => m.EsrimapModule)
  }
];

@NgModule({
  declarations: [EsrimapComponent, HomepageComponent, StoreComponent],
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    FlexLayoutModule
  ],
  exports: [RouterModule]
})
export class HomepageModule {}


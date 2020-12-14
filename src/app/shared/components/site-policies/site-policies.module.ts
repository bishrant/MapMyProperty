import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitePoliciesComponent } from './site-policies.component';



@NgModule({
  declarations: [SitePoliciesComponent],
  imports: [
    CommonModule
  ],
  exports: [SitePoliciesComponent]
})
export class SitePoliciesModule { }

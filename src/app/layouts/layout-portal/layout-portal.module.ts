import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutPortalRoutingModule } from './layout-portal-routing.module';
import { LayoutPortalComponent } from './layout-portal.component';


@NgModule({
  declarations: [LayoutPortalComponent],
  imports: [
    CommonModule,
    LayoutPortalRoutingModule,
  ]
})
export class LayoutPortalModule { }

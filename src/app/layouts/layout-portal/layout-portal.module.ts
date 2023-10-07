import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutPortalRoutingModule } from './layout-portal-routing.module';
import { LayoutPortalComponent } from './layout-portal.component';
import { HomeComponent } from 'src/app/pages/home/home.component';

@NgModule({
  declarations: [LayoutPortalComponent, HomeComponent],
  imports: [CommonModule, LayoutPortalRoutingModule],
})
export class LayoutPortalModule {}

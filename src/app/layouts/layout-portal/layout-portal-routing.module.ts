import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPortalComponent } from './layout-portal.component';

const routes: Routes = [
  { path: '', component: LayoutPortalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutPortalRoutingModule { }

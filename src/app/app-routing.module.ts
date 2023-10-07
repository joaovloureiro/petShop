import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPortalComponent } from './layouts/layout-portal/layout-portal.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPortalComponent,
    loadChildren: () =>
      import('./layouts/layout-portal/layout-portal.module').then(
        (m) => m.LayoutPortalModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

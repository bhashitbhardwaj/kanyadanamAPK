import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhysicalappearancePage } from './physicalappearance.page';

const routes: Routes = [
  {
    path: '',
    component: PhysicalappearancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhysicalappearancePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HideanddeleteaccountPage } from './hideanddeleteaccount.page';

const routes: Routes = [
  {
    path: '',
    component: HideanddeleteaccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HideanddeleteaccountPageRoutingModule {}

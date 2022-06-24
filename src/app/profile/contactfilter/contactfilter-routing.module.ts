import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactfilterPage } from './contactfilter.page';

const routes: Routes = [
  {
    path: '',
    component: ContactfilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactfilterPageRoutingModule {}

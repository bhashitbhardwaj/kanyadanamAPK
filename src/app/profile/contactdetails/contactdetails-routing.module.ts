import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactdetailsPage } from './contactdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ContactdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactdetailsPageRoutingModule {}

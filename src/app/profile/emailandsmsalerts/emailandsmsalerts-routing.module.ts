import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailandsmsalertsPage } from './emailandsmsalerts.page';

const routes: Routes = [
  {
    path: '',
    component: EmailandsmsalertsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailandsmsalertsPageRoutingModule {}

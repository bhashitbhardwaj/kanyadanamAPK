import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivacyoptionPage } from './privacyoption.page';

const routes: Routes = [
  {
    path: '',
    component: PrivacyoptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivacyoptionPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducationprofessiondetailsPage } from './educationprofessiondetails.page';

const routes: Routes = [
  {
    path: '',
    component: EducationprofessiondetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationprofessiondetailsPageRoutingModule {}

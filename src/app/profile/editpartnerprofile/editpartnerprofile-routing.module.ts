import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditpartnerprofilePage } from './editpartnerprofile.page';

const routes: Routes = [
  {
    path: '',
    component: EditpartnerprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditpartnerprofilePageRoutingModule {}

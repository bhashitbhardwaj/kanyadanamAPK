import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchfilterPage } from './matchfilter.page';

const routes: Routes = [
  {
    path: '',
    component: MatchfilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchfilterPageRoutingModule {}

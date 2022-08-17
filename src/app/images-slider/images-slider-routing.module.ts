import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagesSliderPage } from './images-slider.page';

const routes: Routes = [
  {
    path: '',
    component: ImagesSliderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagesSliderPageRoutingModule {}

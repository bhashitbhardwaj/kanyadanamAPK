import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagesSliderPageRoutingModule } from './images-slider-routing.module';

import { ImagesSliderPage } from './images-slider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImagesSliderPageRoutingModule
  ],
  declarations: [ImagesSliderPage]
})
export class ImagesSliderPageModule {}

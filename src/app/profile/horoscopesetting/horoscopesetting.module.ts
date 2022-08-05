import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoroscopesettingPageRoutingModule } from './horoscopesetting-routing.module';

import { HoroscopesettingPage } from './horoscopesetting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoroscopesettingPageRoutingModule
  ],
  declarations: [HoroscopesettingPage]
})
export class HoroscopesettingPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchfilterPageRoutingModule } from './matchfilter-routing.module';

import { MatchfilterPage } from './matchfilter.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    MatchfilterPageRoutingModule
  ],
  declarations: [MatchfilterPage]
})
export class MatchfilterPageModule {}

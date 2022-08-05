import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicSelectableModule } from 'ionic-selectable';
import { AdvancesearchPage } from './advancesearch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule
  ],
  declarations: [AdvancesearchPage]
})
export class AdvancesearchPageModule {}

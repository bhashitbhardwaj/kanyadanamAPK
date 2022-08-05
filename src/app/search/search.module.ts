import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';
import { IonicSelectableModule } from 'ionic-selectable';
import { SearchPage } from './search.page';
import { AdvancesearchPage } from './advancesearch/advancesearch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    SearchPageRoutingModule,
    
  ],
  declarations: [SearchPage,AdvancesearchPage]
})
export class SearchPageModule {}

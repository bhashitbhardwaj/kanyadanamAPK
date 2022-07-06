import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HideanddeleteaccountPageRoutingModule } from './hideanddeleteaccount-routing.module';

import { HideanddeleteaccountPage } from './hideanddeleteaccount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HideanddeleteaccountPageRoutingModule
  ],
  declarations: [HideanddeleteaccountPage]
})
export class HideanddeleteaccountPageModule {}

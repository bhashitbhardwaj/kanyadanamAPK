import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactfilterPageRoutingModule } from './contactfilter-routing.module';
import { IonicSelectableModule } from 'ionic-selectable';

import { ContactfilterPage } from './contactfilter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    ContactfilterPageRoutingModule
  ],
  declarations: [ContactfilterPage]
})
export class ContactfilterPageModule {}

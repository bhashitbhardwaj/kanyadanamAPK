import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhysicalappearancePageRoutingModule } from './physicalappearance-routing.module';
import { IonicSelectableModule } from 'ionic-selectable';

import { PhysicalappearancePage } from './physicalappearance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    PhysicalappearancePageRoutingModule
  ],
  declarations: [PhysicalappearancePage]
})
export class PhysicalappearancePageModule {}

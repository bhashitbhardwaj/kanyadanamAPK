import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailandsmsalertsPageRoutingModule } from './emailandsmsalerts-routing.module';

import { EmailandsmsalertsPage } from './emailandsmsalerts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailandsmsalertsPageRoutingModule
  ],
  declarations: [EmailandsmsalertsPage]
})
export class EmailandsmsalertsPageModule {}

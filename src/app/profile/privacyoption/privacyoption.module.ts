import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivacyoptionPageRoutingModule } from './privacyoption-routing.module';

import { PrivacyoptionPage } from './privacyoption.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivacyoptionPageRoutingModule
  ],
  declarations: [PrivacyoptionPage]
})
export class PrivacyoptionPageModule {}

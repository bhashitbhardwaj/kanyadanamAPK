import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EducationprofessiondetailsPageRoutingModule } from './educationprofessiondetails-routing.module';

import { EducationprofessiondetailsPage } from './educationprofessiondetails.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    EducationprofessiondetailsPageRoutingModule
  ],
  declarations: [EducationprofessiondetailsPage]
})
export class EducationprofessiondetailsPageModule {}

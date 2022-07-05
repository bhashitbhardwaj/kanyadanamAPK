import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactdetailsPageRoutingModule } from './contactdetails-routing.module';

import { ContactdetailsPage } from './contactdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactdetailsPageRoutingModule
  ],
  declarations: [ContactdetailsPage]
})
export class ContactdetailsPageModule {}

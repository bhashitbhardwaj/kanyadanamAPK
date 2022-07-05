import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditpartnerprofilePageRoutingModule } from './editpartnerprofile-routing.module';
import { IonicSelectableModule } from 'ionic-selectable';

import { EditpartnerprofilePage } from './editpartnerprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    EditpartnerprofilePageRoutingModule
  ],
  declarations: [EditpartnerprofilePage]
})
export class EditpartnerprofilePageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
  {
    path: 'contactfilter',
    loadChildren: () => import('./contactfilter/contactfilter.module').then( m => m.ContactfilterPageModule)
  },
  {
    path: 'editpartnerprofile',
    loadChildren: () => import('./editpartnerprofile/editpartnerprofile.module').then( m => m.EditpartnerprofilePageModule)
  },
  {
    path: 'physicalappearance',
    loadChildren: () => import('./physicalappearance/physicalappearance.module').then( m => m.PhysicalappearancePageModule)
  },
  {
    path: 'contactdetails',
    loadChildren: () => import('../profile/contactdetails/contactdetails.module').then( m => m.ContactdetailsPageModule)
  },
  {
    path: 'educationprofessiondetails',
    loadChildren: () => import('./educationprofessiondetails/educationprofessiondetails.module').then( m => m.EducationprofessiondetailsPageModule)
  },  {
    path: 'biodata',
    loadChildren: () => import('./biodata/biodata.module').then( m => m.BiodataPageModule)
  },
  {
    path: 'horoscope',
    loadChildren: () => import('./horoscope/horoscope.module').then( m => m.HoroscopePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/provider/api.service';
import { LoaderService } from 'src/app/provider/loader.service';
import { ToastService } from 'src/app/provider/toast.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userData: any;
  constructor(
    private router: Router,
    private loader: LoaderService,
    private api: ApiService,
    private toast: ToastService
  ) { 
    
  }
  ionViewWillEnter()
  {
    this.loader.Show('Loading...');
    this.api.postDataWithAuth('api/getProfileByUniqueID',  {})
    .subscribe(res => {
      this.loader.Hide();
      if (res.status) {
        console.log(res.data.user_detail);
        this.userData = res.data.user_detail;
        this.userData.partner_details.martialstatus = this.userData.partner_details.martialstatus && this.userData.partner_details.martialstatus.map(user => user.name).join(', ');
        this.userData.partner_details.religion = this.userData.partner_details.religion && this.userData.partner_details.religion.map(user => user.religion).join(', ');
        this.userData.partner_details.tongue = this.userData.partner_details.tongue && this.userData.partner_details.tongue.map(user => user.tongue).join(', ');
        this.userData.partner_details.community = this.userData.partner_details.community && this.userData.partner_details.community.map(user => user.community).join(', ');
        this.userData.partner_details.country_id = this.userData.partner_details.country_id && this.userData.partner_details.country_id.map(user => user.name).join(', ');
        this.userData.partner_details.state_id = this.userData.partner_details.state_id && this.userData.partner_details.state_id.map(user => user.name).join(', ');
        this.userData.partner_details.education_level = this.userData.partner_details.education_level && this.userData.partner_details.education_level.map(user => user.name).join(', ');
        this.userData.partner_details.workwith = this.userData.partner_details.workwith && this.userData.partner_details.workwith.map(user => user.name).join(', ');
        this.userData.partner_details.occupation = this.userData.partner_details.occupation && this.userData.partner_details.occupation.map(user => user.name).join(', ');
        this.userData.partner_details.annualincome = this.userData.partner_details.annualincome && this.userData.partner_details.annualincome.map(user => user.name).join(', ');
        this.userData.user_details.tongue = this.userData.user_details.tongue && this.userData.user_details.tongue.map(user => user.tongue).join(', ');
        this.userData.user_details.education_level = this.userData.user_details.education_level && this.userData.user_details.education_level.map(user => user.name).join(', ');
      }
      else {
         this.toast.Notify({
          message:res.message,
          duration:3000,
          color:'primary',
          position:'bottom'
        })
      }
    });
  }

  ngOnInit() {
    
  }
}

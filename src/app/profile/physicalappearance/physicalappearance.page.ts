import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ApiService } from 'src/app/provider/api.service';
import { LoaderService } from 'src/app/provider/loader.service';
import { ToastService } from 'src/app/provider/toast.service';


@Component({
  selector: 'app-physicalappearance',
  templateUrl: './physicalappearance.page.html',
  styleUrls: ['./physicalappearance.page.scss'],
})
export class PhysicalappearancePage implements OnInit {
  dropDown: any = {};
  selectedData: any = {
    body_type:'Slim',
    skin_tone: 'Very Fair',
    disability: 'None'
  };
  public body_type = [
    { val: 'Slim' },
    { val: 'Athletic' },
    { val: 'Average' },
    { val: 'Heavy' }
  ];
  public skin_tone = [
    { val: 'Very Fair'},
    { val: 'Fair' },
    { val: 'Wheatish' },
    { val: 'Dark' }
  ];
  public disability = [
    { val: 'None' },
    { val: 'Physical Disability' }
  ];

  constructor(
    private router: Router,
    private loader: LoaderService,
    private api: ApiService,
    private toast: ToastService
  ) {
  }

  ngOnInit() {
    this.api.getData('api/getHeights').subscribe(res => {
      if (res.status) {
        console.log(res);
        this.dropDown.height = res.data;
      }
      else {
        this.toast.Notify({
          message: res.message,
          duration: 3000,
          position: 'top'
        })
      }
    })
    this.getPhysicalappearance();
  }

  getPhysicalappearance()
  {
    this.loader.Show('Loading...');
    this.api.postDataWithAuth('api/getPhysicalAppearance',{}).subscribe(res => {
      this.loader.Hide();
      if (res.status) {
        console.log(res.data.user_detail);
        if(res.data.user_detail)
        { 
          this.selectedData.height = res.data.user_detail.height[0];
          this.selectedData.body_type = res.data.user_detail.body_type;
          this.selectedData.skin_tone = res.data.user_detail.skin_tone;
          this.selectedData.disability = res.data.user_detail.disability;
        }
      }
      else {
        this.toast.Notify({
          message: res.message,
          duration: 3000,
          position: 'top'
        })
      }
    })
  }

}

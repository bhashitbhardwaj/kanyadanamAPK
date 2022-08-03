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
  selectedData: any = {};
  rForm: FormGroup;

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
    this.getPhysicalAppearance()


  }

  getPhysicalAppearance(){
    this.loader.Show('Loading...');
    this.api.postDataWithAuth('api/getPhysicalAppearance',{}).subscribe(res => {
      this.loader.Hide();
      if (res.status) {
        console.log(res.data.user_detail);
        if(res.data.user_detail && res.data.user_detail)
        { 
              if(res.data.user_detail!=null){
                //console.log(res.data.user_detail);
                console.log(res.data.user_detail.body_type);
                // this.selectedData.height = {
                //  height_label_feet: res.data.user_detail.height_from[0].height_label_feet,
                //   id: res.data.user_detail.height_from[0].id,
                // } 
                //this.selectedData.workign_with = res.data.user_detail.workwith[0].id;
                this.selectedData.body_type = res.data.user_detail.body_type,

                this.selectedData.country = res.data.user_detail.country_id;
                this.selectedData.state = res.data.user_detail.state_id;
                this.selectedData.education = res.data.user_detail.education_level;
                if(res.data.user_detail.education_field!=null){
                  this.selectedData.educationfield = res.data.user_detail.education_field[0].id;
                }
                if(res.data.user_detail.occupation!=null){
                  this.selectedData.profession_area = res.data.user_detail.occupation[0].id;
                }
                if(res.data.user_detail.annualincome!=null){
                  this.selectedData.annual_income = res.data.user_detail.annualincome[0].id;
                }
                //this.selectedData.educationfield = res.data.user_detail.education_field[0];
                //this.selectedData.profession_area = res.data.user_detail.occupation[0];
                //this.selectedData.annual_income = res.data.user_detail.annualincome[0];
              }
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

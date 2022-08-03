import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ApiService } from 'src/app/provider/api.service';
import { LoaderService } from 'src/app/provider/loader.service';
import { ToastService } from 'src/app/provider/toast.service';

@Component({
  selector: 'app-educationprofessiondetails',
  templateUrl: './educationprofessiondetails.page.html',
  styleUrls: ['./educationprofessiondetails.page.scss'],
})
export class EducationprofessiondetailsPage implements OnInit {
  dropDown: any = {};
  selectedData: any = {};
  constructor(
    private router: Router,
    private loader: LoaderService,
    private api: ApiService,
    private toast: ToastService
  ) {
    this.selectedData.age = { lower: 21, upper: 36 };
  }

  ngOnInit() {
  
    this.api.getData('api/getOccupation').subscribe(res => {
      if (res.status) {
        console.log(res);
        this.dropDown.occupations = res.data;
      }
      else {
        this.toast.Notify({
          message: res.message,
          duration: 3000,
          position: 'top'
        })
      }
    })
    this.api.getData('api/getWorkWith').subscribe(res => {
      if (res.status) {
        console.log(res);
        this.dropDown.workWiths = res.data;
      }
      else {
        this.toast.Notify({
          message: res.message,
          duration: 3000,
          position: 'top'
        })
      }
    })
    this.api.getData('api/getEducationLevels').subscribe(res => {
      if (res.status) {
        console.log(res);
        this.dropDown.educationLevels = res.data;
      }
      else {
        this.toast.Notify({
          message: res.message,
          duration: 3000,
          position: 'top'
        })
      }
    })
    this.api.getData('api/getEducationFields').subscribe(res => {
      if (res.status) {
        console.log(res);
        this.dropDown.educationFields = res.data;
      }
      else {
        this.toast.Notify({
          message: res.message,
          duration: 3000,
          position: 'top'
        })
      }
    })
    this.api.getData('api/getAnnualIncomes').subscribe(res => {
      if (res.status) {
        console.log(res);
        this.dropDown.annualIncomes = res.data;
      }
      else {
        this.toast.Notify({
          message: res.message,
          duration: 3000,
          position: 'top'
        })
      }
    })
    this.getEducationDetails()
  
  }

  getEducationDetails()
  {
    this.loader.Show('Loading...');
    this.api.postDataWithAuth('api/getEducationProfessionDetails',{}).subscribe(res => {
      this.loader.Hide();
      if (res.status) {
        //console.log(res.data.user_detail);
        if(res.data.user_detail && res.data.user_detail)
        { 
          console.log(res.data.user_detail);
          // this.selectedData.age = { lower: res.data.user_detail.age_from, upper: res.data.user_detail.age_to };
          // this.selectedData.heightFrom = {
          //   height_label_feet: res.data.user_detail.height_from[0].height_label_feet,
          //   id: res.data.user_detail.height_from[0].id,
          // } 
          // this.selectedData.heightTo = {
          //   height_label_feet: res.data.user_detail.height_to[0].height_label_feet,
          //   id: res.data.user_detail.height_to[0].id,
          // } 
          // this.selectedData.marital_status =[];
          // res.data.user_detail.martialstatus.forEach(element => {
          //   this.selectedData.marital_status.push(element.id)
          // });
          // this.selectedData.religion =[];
          // res.data.user_detail.religion.forEach(element => {
          //   this.selectedData.religion.push(element.id)
          // });
          this.selectedData.workign_with =[];
          res.data.user_detail.workwith.forEach(element => {
            this.selectedData.workign_with.push(element.id)
          });
          // this.selectedData.educationfield =[];
          // res.data.user_detail.education_field.forEach(element => {
          //   this.selectedData.educationfield.push(element.id)
          // });
          //console.log(this.selectedData.educationfield);
          //console.log(res.data.user_detail.educationfield);
          //this.selectedData.workign_with = res.data.user_detail.workwith[0];
          this.selectedData.community = res.data.user_detail.community;
          this.selectedData.country = res.data.user_detail.country_id;
          this.selectedData.state = res.data.user_detail.state_id;
          this.selectedData.education = res.data.user_detail.education_level;
          this.selectedData.educationfield = res.data.user_detail.education_field[0];
          this.selectedData.profession_area = res.data.user_detail.occupation[0];
          this.selectedData.annual_income = res.data.user_detail.annualincome[0];
        //   res.data.user_detail.diet.forEach(element => {
        //      for (let index = 0; index < this.dropDown.diets.length; index++) {
        //       const element1 = this.dropDown.diets[index];
        //        if(element == element1.name)
        //        {
        //         this.dropDown.diets[index].isChecked = true;
        //        }
        //      }
        //   });
        //   res.data.user_detail.profile_created_by.forEach(element => {
        //     for (let index = 0; index < this.owners.length; index++) {
        //      const element1 = this.owners[index];
        //       if(element == element1.val)
        //       {
        //        this.owners[index].isChecked = true;
        //       }
        //     }
        //  });
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

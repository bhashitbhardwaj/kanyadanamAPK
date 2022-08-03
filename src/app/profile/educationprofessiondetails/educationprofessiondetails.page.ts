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

  //Save data Function
  save() {
    var education =[];
    this.selectedData.education= this.selectedData.education || [];
    this.selectedData.education.forEach(obj => {
      education.push(obj.id)
    });
    console.log('save:', this.selectedData);
    this.loader.Show('Loading...');
    this.api.postDataWithAuth('api/updateEducationProfessionDetails',
    {
      "education_level":education,
      "education_field":this.selectedData.educationfield.id,
      "workwith":this.selectedData.workign_with,
      "occupation":this.selectedData.profession_area.id,
      "annualincome":this.selectedData.annual_income.id
    }).subscribe(res=>{
       this.loader.Hide();
       if(res.status)
       {
         console.log(res);
         this.toast.Notify({
          message:res.msg,
          duration:3000,
          position:'top'
        })
        this.router.navigateByUrl('/profile');
       }
       else{
          this.toast.Notify({
            message:res.message,
            duration:3000,
            position:'top'
          })
       }
    })
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
        console.log(res.data.user_detail);
        if(res.data.user_detail && res.data.user_detail)
        { 
              if(res.data.user_detail!=null){
                this.selectedData.workign_with = res.data.user_detail.workwith[0].id;
                this.selectedData.community = res.data.user_detail.community;
                this.selectedData.country = res.data.user_detail.country_id;
                this.selectedData.state = res.data.user_detail.state_id;
                this.selectedData.education = res.data.user_detail.education_level;
                this.selectedData.educationfield = res.data.user_detail.education_field[0];
                this.selectedData.profession_area = res.data.user_detail.occupation[0];
                this.selectedData.annual_income = res.data.user_detail.annualincome[0];
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

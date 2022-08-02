import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ApiService } from 'src/app/provider/api.service';
import { LoaderService } from 'src/app/provider/loader.service';
import { ToastService } from 'src/app/provider/toast.service';

@Component({
  selector: 'app-editpartnerprofile',
  templateUrl: './editpartnerprofile.page.html',
  styleUrls: ['./editpartnerprofile.page.scss'],
})
export class EditpartnerprofilePage implements OnInit {
  dropDown: any = {};
  selectedData: any = {};
  //diets = [];
  //diets: any = [];
  public owners = [
    { val: 'Doesnt matter', isChecked: true },
    { val: 'Self', isChecked: false },
    { val: 'Parent / Guardian', isChecked: false },
    { val: 'Sibling / Friend /Others', isChecked: false }
  ];
  public diets = [
    { val: 'Vegetarian', isChecked: true },
    { val: 'Vegetarian', isChecked: false },
    { val: 'Non-Vegetarian', isChecked: false },
    { val: 'Vegan', isChecked: false }
  ];

  constructor(
    private router: Router,
    private loader: LoaderService,
    private api: ApiService,
    private toast: ToastService
  ) {
    this.selectedData.age = { lower: 21, upper: 36 };
  }

  save() {
    this.selectedData.diets = []
    this.diets.forEach(obj => {
      if (obj.isChecked) {
        this.selectedData.diets.push(obj.val);
      }
    });
    this.selectedData.owners = []
    this.owners.forEach(obj => {
      if (obj.isChecked) {
        this.selectedData.owners.push(obj.val);
      }
    });
    var community =[];
    this.selectedData.community= this.selectedData.community || [];
    this.selectedData.community.forEach(obj => {
      community.push(obj.id)
    });
    var state =[];
    this.selectedData.state= this.selectedData.state || [];
    this.selectedData.state.forEach(obj => {
      state.push(obj.id)
    });
    var education =[];
    this.selectedData.education= this.selectedData.education || [];
    this.selectedData.education.forEach(obj => {
      education.push(obj.id)
    });
    var profession_area =[];
    this.selectedData.profession_area= this.selectedData.profession_area || [];
    this.selectedData.profession_area.forEach(obj => {
      profession_area.push(obj.id)
    });
    console.log('save:', this.selectedData);
    this.loader.Show('Loading...');
    this.api.postDataWithAuth('api/updatePartnerPreferences',
    {
      age_from:this.selectedData.age.lower,
      age_to:this.selectedData.age.upper,
      height_from:this.selectedData.heightFrom,
      height_to:this.selectedData.heightTo,
      tongue:this.selectedData.tongue,
      martialstatus:this.selectedData.marital_status,
      religion_id:this.selectedData.religion,
      community_id:community,
      country_id:[this.selectedData.country.id],
      state_id:state,
      education_level:education,
      workwith:this.selectedData.workign_with,
      occupation:profession_area,
      annualincome:this.selectedData.annual_income,
      profile_created_by:this.selectedData.owners,
      diet:this.selectedData.diets
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

  countryChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
    this.dropDown.states = [];
    this.selectedData.state = null;
    this.api.getData('api/getStates/' + event.value.id).subscribe(res => {
      if (res.status) {
        console.log(res);
        this.dropDown.states = res.data;
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

  ngOnInit() {
    this.api.getData('api/getHeights').subscribe(res => {
      if (res.status) {
        console.log(res);
        this.dropDown.heightFrom = res.data;
      }
      else {
        this.toast.Notify({
          message: res.message,
          duration: 3000,
          position: 'top'
        })
      }
    })
    this.api.getData('api/getReligions').subscribe(res => {
      if (res.status) {
        console.log(res);
        this.dropDown.religions = res.data;
      }
      else {
        this.toast.Notify({
          message: res.message,
          duration: 3000,
          position: 'top'
        })
      }
    })
    this.api.getData('api/getTongues').subscribe(res => {
      if (res.status) {
        console.log(res);
        this.dropDown.tongues = res.data;
      }
      else {
        this.toast.Notify({
          message: res.message,
          duration: 3000,
          position: 'top'
        })
      }
    })
    this.api.getData('api/getCommunities').subscribe(res => {
      if (res.status) {
        console.log(res);
        this.dropDown.communities = res.data;
      }
      else {
        this.toast.Notify({
          message: res.message,
          duration: 3000,
          position: 'top'
        })
      }
    })
    this.api.getData('api/getCountries').subscribe(res => {
      if (res.status) {
        console.log(res);
        this.dropDown.countries = res.data;
      }
      else {
        this.toast.Notify({
          message: res.message,
          duration: 3000,
          position: 'top'
        })
      }
    })
    //Created By Bhashit

    this.api.getData('api/getMartialStatus').subscribe(res => {
      if (res.status) {
        console.log(res);
        this.dropDown.martialstatus = res.data;
      }
      else {
        this.toast.Notify({
          message: res.message,
          duration: 3000,
          position: 'top'
        })
      }
    })
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
    // this.api.getData('api/getDietPrefrence').subscribe(res => {
    //   if (res.status) {
    //     console.log(res);
    //     this.diets.diets = res.data;
    //     //console.log(this.diets.diets[0].name);
    //   }
    //   else {
    //     this.toast.Notify({
    //       message: res.message,
    //       duration: 3000,
    //       position: 'top'
    //     })
    //   }
    // })

    //Created By Bhashit
  }
}

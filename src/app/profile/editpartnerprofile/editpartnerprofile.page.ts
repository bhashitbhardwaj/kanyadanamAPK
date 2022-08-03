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
  public owners = [
    { val: 'Doesnt matter', isChecked: false },
    { val: 'Self', isChecked: false },
    { val: 'Parent / Guardian', isChecked: false },
    { val: 'Sibling / Friend /Others', isChecked: false }
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
    this.dropDown.diets.forEach(obj => {
      if (obj.isChecked) {
        this.selectedData.diets.push(obj.name);
      }
    });
    this.selectedData.owners = []
    this.owners.forEach(obj => {
      if (obj.isChecked) {
        this.selectedData.owners.push(obj.val);
      }
    });
    var tongue =[];
    this.selectedData.tongue= this.selectedData.tongue || [];
    this.selectedData.tongue.forEach(obj => {
      tongue.push(obj.tongue_id)
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
    var annualincome =[];
    this.selectedData.annual_income = this.selectedData.annual_income || [];
    this.selectedData.annual_income.forEach(obj => {
      annualincome.push(obj.id)
    });
    console.log('save:', this.selectedData);
    this.loader.Show('Loading...');
    this.api.postDataWithAuth('api/updatePartnerPreferences',
    {
      age_from:this.selectedData.age.lower,
      age_to:this.selectedData.age.upper,
      height_from:(this.selectedData.heightFrom)?this.selectedData.heightFrom.id:'',
      height_to:(this.selectedData.heightTo)?this.selectedData.heightTo.id:'',
      tongue:tongue,
      martialstatus:this.selectedData.marital_status,
      religion_id:this.selectedData.religion,
      community_id:community,
      country_id:(this.selectedData.country)?[this.selectedData.country.id]:[],
      state_id:state,
      education_level:education,
      workwith:this.selectedData.workign_with,
      occupation:profession_area,
      annualincome:annualincome,
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
    var country_id =[];
    event.value.forEach(obj => {
      country_id.push(obj.id)
    });
    this.dropDown.states = [];
    this.selectedData.state = null;
    this.api.postData('api/getStateArrayOrSingle',{
      country_id:country_id
    }).subscribe(res => {
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
    this.api.getData('api/getDietPrefrence').subscribe(res => {
      if (res.status) {
        console.log(res);
        res.data.forEach(element => {
          element.isChecked = false;
        });
        console.log(res.data);
        this.dropDown.diets = res.data;
      }
      else {
        this.toast.Notify({
          message: res.message,
          duration: 3000,
          position: 'top'
        })
      }
    })
    this.getPartnerPrefeences()
  }

  getPartnerPrefeences()
  {
    this.loader.Show('Loading...');
    this.api.postDataWithAuth('api/getPartnerPreferences',{}).subscribe(res => {
      this.loader.Hide();
      if (res.status) {
        console.log(res.data.user_detail);
        if(res.data.user_detail && res.data.user_detail)
        {
          this.selectedData.age = { lower: res.data.user_detail.age_from, upper: res.data.user_detail.age_to };
          this.selectedData.heightFrom = {
            height_label_feet: res.data.user_detail.height_from[0].height_label_feet,
            id: res.data.user_detail.height_from[0].id,
          } 
          this.selectedData.heightTo = {
            height_label_feet: res.data.user_detail.height_to[0].height_label_feet,
            id: res.data.user_detail.height_to[0].id,
          } 
          this.selectedData.marital_status =[];
          res.data.user_detail.martialstatus.forEach(element => {
            this.selectedData.marital_status.push(element.id)
          });
          this.selectedData.religion =[];
          res.data.user_detail.religion.forEach(element => {
            this.selectedData.religion.push(element.id)
          });
          this.selectedData.workign_with =[];
          res.data.user_detail.workwith.forEach(element => {
            this.selectedData.workign_with.push(element.id)
          });
          this.selectedData.tongue = res.data.user_detail.tongue;
          this.selectedData.community = res.data.user_detail.community;
          this.selectedData.state = res.data.user_detail.state_id;
          this.selectedData.education = res.data.user_detail.education_level;
          this.selectedData.profession_area = res.data.user_detail.occupation;
          this.selectedData.annual_income = res.data.user_detail.annualincome;
          res.data.user_detail.diet.forEach(element => {
             for (let index = 0; index < this.dropDown.diets.length; index++) {
              const element1 = this.dropDown.diets[index];
               if(element == element1.name)
               {
                this.dropDown.diets[index].isChecked = true;
               }
             }
          });
          res.data.user_detail.profile_created_by.forEach(element => {
            for (let index = 0; index < this.owners.length; index++) {
             const element1 = this.owners[index];
              if(element == element1.val)
              {
               this.owners[index].isChecked = true;
              }
            }
         });
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

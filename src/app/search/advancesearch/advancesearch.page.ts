import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ApiService } from 'src/app/provider/api.service';
import { LoaderService } from 'src/app/provider/loader.service';
import { ToastService } from 'src/app/provider/toast.service';

@Component({
  selector: 'app-advancesearch',
  templateUrl: './advancesearch.page.html',
  styleUrls: ['./advancesearch.page.scss'],
})
export class AdvancesearchPage implements OnInit {
  selectSegment:any = 1;
  dropDown: any = {};
  selectedData: any = {};
  constructor(private router: Router,
    private loader: LoaderService,
    private api: ApiService,
    private toast: ToastService) {
      this.selectedData.age = { lower: 21, upper: 36 };
  }
  search()
  {
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
    var country =[];
    this.selectedData.country= this.selectedData.country || [];
    this.selectedData.country.forEach(obj => {
      country.push(obj.id)
    });
    var state =[];
    this.selectedData.state= this.selectedData.state || [];
    this.selectedData.state.forEach(obj => {
      state.push(obj.id)
    });
    var city =[];
    this.selectedData.city= this.selectedData.city || [];
    this.selectedData.city.forEach(obj => {
          city.push(obj.id)
        });
    var education =[];
    this.selectedData.education= this.selectedData.education || [];
    this.selectedData.education.forEach(obj => {
      education.push(obj.id)
    });
    var educationField =[];
    this.selectedData.educationField= this.selectedData.educationField || [];
    this.selectedData.educationField.forEach(obj => {
      educationField.push(obj.id)
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
    var annualincome =[];
    this.selectedData.annual_income = this.selectedData.annual_income || [];
    this.selectedData.annual_income.forEach(obj => {
      annualincome.push(obj.id)
    });
    this.router.navigateByUrl('/tabs/tab2',{ state: {
          height:(this.selectedData.heightFrom)?[this.selectedData.heightFrom.id]:[],
          tongue:tongue,
          martialstatus:this.selectedData.marital_status,
          religion:this.selectedData.religion,
          education_field: educationField,
          workwith:this.selectedData.workign_with,
          occupation:profession_area,
          annualincome:annualincome,
          search_type:"advance_search" ,
          age_range:this.selectedData.age.lower+":"+this.selectedData.age.upper,
          country:country,
          community:community,
          state:state,
          city:city,
          education:education,
          res_start: 0
    } });
  }

  stateChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
    var state_id =[];
    event.value.forEach(obj => {
      state_id.push(obj.id)
    });
    this.dropDown.cities = [];
    this.selectedData.city = null;
    this.api.postData('api/getCityArrayOrSingle',{
      state_id:state_id
    }).subscribe(res => {
      if (res.status) {
        console.log(res);
        this.dropDown.cities = res.data;
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
  }
}

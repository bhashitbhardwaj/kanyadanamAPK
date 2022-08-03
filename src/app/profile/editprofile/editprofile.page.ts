import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ApiService } from 'src/app/provider/api.service';
import { LoaderService } from 'src/app/provider/loader.service';
import { ToastService } from 'src/app/provider/toast.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
  dropDown: any = {};
  selectedData: any = {};
  rForm: FormGroup;
  constructor(
    private profileForm: FormBuilder,
    private router: Router,
    private loader: LoaderService,
    private api: ApiService,
    private toast: ToastService
  ) { 
    this.rForm = this.profileForm.group({
      name: [null],
      aadhar_card: [null],
      dob:[null],
      gender:["Male"],
      create_profile_for:[null],
      religion:[null],
      martialstatus:[null],
      diet:[null],
      sub_community:[null],
      country:[null],
      state:[null],
      city:[null],
      community:[null],
      tongue:[null],
      about: [null],
      does_smoke: ["No",null],
      familydetails: [null],
      does_drink: ["No",null],
      mobile:[null,Validators.compose([ 
        Validators.maxLength(10),
        Validators.minLength(10)])],
      email: ["", Validators.compose([
          Validators.minLength(5),
          Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        ])]
    });
  }
  stateChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
    this.dropDown.states = [];
    this.selectedData.state = null;
    this.api.postData('api/getCityArrayOrSingle',{
      state_id:[event.value.id]
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
    this.dropDown.states = [];
    this.selectedData.state = null;
    this.api.postData('api/getStateArrayOrSingle',{
      country_id:[event.value.id]
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
  save()
  {
    this.rForm.value.community =this.rForm.value.community.id;
    this.rForm.value.country =this.rForm.value.country.id;
    this.rForm.value.state =this.rForm.value.state.id;
    this.rForm.value.city =this.rForm.value.city.id;
    var tongue =[];
    this.rForm.value.tongue= this.rForm.value.tongue || [];
    this.rForm.value.tongue.forEach(obj => {
      tongue.push(obj.tongue_id)
    });
    this.rForm.value.tongue = tongue;
    this.loader.Show('Loading...');
    this.api.postDataWithAuth('api/updateProfile',this.rForm.value).subscribe(res=>{
       this.loader.Hide();
       if(res.status)
       {
         console.log(res);
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
    this.api.postDataWithAuth('api/getProfileByUniqueID',  {})
    .subscribe(res => {
      if (res.status) {
        console.log(res.data.user_detail);
        this.rForm.patchValue({
          "name": res.data.user_detail.user.name,
          "email": res.data.user_detail.user.email,
          "mobile": res.data.user_detail.user.mobile,
          "gender": res.data.user_detail.user.gender,
          "about": res.data.user_detail.user.about,
          "familydetails": res.data.user_detail.user.familydetails,
          "aadhar_card": res.data.user_detail.user.aadhar_card,
          "diet": res.data.user_detail.user_details.diet,
          "community": res.data.user_detail.user_details.community_id[0],
          "country": res.data.user_detail.user_details.country_id[0],
          "state": res.data.user_detail.user_details.state_id[0],
          "city": res.data.user_detail.user_details.city_id[0],
          "martialstatus": res.data.user_detail.user_details.martialstatus[0].id,
          "sub_community": res.data.user_detail.user_details.sub_community,
          "does_drink": res.data.user_detail.user_details.does_drink,
          "does_smoke": res.data.user_detail.user_details.does_smoke,
          "tongue": res.data.user_detail.user_details.tongue,
          "religion":(res.data.user_detail.user_details.religion_id.length)?res.data.user_detail.user_details.religion_id[0].id:null,
          "create_profile_for": res.data.user_detail.user.create_profile_for,
          "dob": res.data.user_detail.user.dobday + '/' + res.data.user_detail.user.dobmonth + '/' + res.data.user_detail.user.dobyear
      });
      }
      else {
        this.toast.Notify({
          message: res.message,
          duration: 3000,
          position: 'top'
        })
      }
    });
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
  }
}

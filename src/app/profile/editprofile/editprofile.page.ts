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
      dob:[null],
      gender:["Male"],
      create_profile_for:[null],
      religion:[null],
      martialstatus:[null],
      diet:[null],
      country:[null],
      state:[null],
      city:[null],
      community:[null],
      tongue:[null],
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

  }
  ngOnInit() {
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

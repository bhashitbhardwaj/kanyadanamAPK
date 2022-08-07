import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ApiService } from '../provider/api.service';
import { LoaderService } from '../provider/loader.service';
import { ToastService } from '../provider/toast.service';

@Component({
  selector: 'app-matchfilter',
  templateUrl: './matchfilter.page.html',
  styleUrls: ['./matchfilter.page.scss'],
})
export class MatchfilterPage implements OnInit {
  @Input() selectedRefine: any;
  dropDown: any = {};
  selectedData: any = {};
  constructor(public modalCtrl: ModalController,
    private router: Router,
    private loader: LoaderService,
    private api: ApiService,
    private toast: ToastService) { 
      this.selectedData.age = { lower: 21, upper: 36 };
  }
 
  refine()
  {
    console.log(this.selectedData);
    this.modalCtrl.dismiss(this.selectedData);
  }

  countryChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
    this.getState(event.value,false)
  }

  getState(counrties,isselect)
  {
    var country_id =[];
    counrties.forEach(obj => {
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
        if(isselect)
        {
          this.selectedData.state = (this.selectedRefine)?this.selectedRefine.state:[];
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

  
  ngOnInit() {
    this.api.getData('api/getHeights').subscribe(res => {
      if (res.status) {
        console.log(res);
        this.dropDown.heightFrom = res.data;
        this.selectedData.heightFrom = (this.selectedRefine)?this.selectedRefine.heightFrom:[];
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
        this.selectedData.religion = (this.selectedRefine)?this.selectedRefine.religion:[];
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
        this.selectedData.tongue = (this.selectedRefine)?this.selectedRefine.tongue:[];
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
        this.selectedData.marital_status = (this.selectedRefine)?this.selectedRefine.marital_status:[];
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
        this.selectedData.community = (this.selectedRefine)?this.selectedRefine.community:[];
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
        this.selectedData.country = (this.selectedRefine)?this.selectedRefine.country:[];
        this.getState(this.selectedData.country,true);
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
        this.selectedData.profession_area = (this.selectedRefine)?this.selectedRefine.profession_area:[];
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
        this.selectedData.workign_with = (this.selectedRefine)?this.selectedRefine.workign_with:[];
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
        this.selectedData.education = (this.selectedRefine)?this.selectedRefine.education:[];
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
        this.selectedData.annual_income = (this.selectedRefine)?this.selectedRefine.annual_income:[];
      }
      else {
        this.toast.Notify({
          message: res.message,
          duration: 3000,
          position: 'top'
        })
      }
    })
    this.selectedData.age = {
       lower: (this.selectedRefine)?this.selectedRefine.age.lower:21,
       upper: (this.selectedRefine)?this.selectedRefine.age.upper:36
       };
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
}

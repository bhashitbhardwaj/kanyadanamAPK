import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ApiService } from 'src/app/provider/api.service';
import { LoaderService } from 'src/app/provider/loader.service';
import { ToastService } from 'src/app/provider/toast.service';

@Component({
  selector: 'app-contactfilter',
  templateUrl: './contactfilter.page.html',
  styleUrls: ['./contactfilter.page.scss'],
})
export class ContactfilterPage implements OnInit {
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

    this.getContactFilters()

  }

  getContactFilters()
  {
    this.loader.Show('Loading...');
    this.api.postDataWithAuth('api/getContactFilters',{}).subscribe(res => {
      this.loader.Hide();
      //console.log(res);
      if (res.status) {
        console.log(Object.keys(res.data.user_detail.contact_filter).length);
        console.log(res.data.user_detail);
        if(res.data.user_detail.contact_filter && Object.keys(res.data.user_detail.contact_filter).length)
        { 
          
          this.selectedData.age = { lower: res.data.user_detail.contact_filter.age_from, upper: res.data.user_detail.contact_filter.age_to };
          if(res.data.user_detail.contact_filter.height_from!=null){
            this.selectedData.heightFrom = {
              height_label_feet: res.data.user_detail.contact_filter.height_from[0].height_label_feet,
              id: res.data.user_detail.contact_filter.height_from[0].id,
            }
          }
          if(res.data.user_detail.contact_filter.height_to!=null){
            this.selectedData.heightTo = {
              height_label_feet: res.data.user_detail.contact_filter.height_to[0].height_label_feet,
              id: res.data.user_detail.contact_filter.height_to[0].id,
            }
          }
          
          this.selectedData.marital_status =[];
          res.data.user_detail.contact_filter.martialstatus.forEach(element => {
            this.selectedData.marital_status.push(element.id)
          });
          this.selectedData.religion =[];
          res.data.user_detail.contact_filter.religion_id.forEach(element => {
            this.selectedData.religion.push(element.id)
          });
          
          this.selectedData.tongue = res.data.user_detail.contact_filter.tongue;
          this.selectedData.community = res.data.user_detail.contact_filter.community_id;
          this.selectedData.country = res.data.user_detail.contact_filter.country_id;
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

  save()
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
    console.log('save:', this.selectedData);
    this.loader.Show('Loading...');
    this.api.postDataWithAuth('api/updateContactFilters',
    {
      age_from:this.selectedData.age.lower,
      age_to:this.selectedData.age.upper,
      height_from:(this.selectedData.heightFrom)?this.selectedData.heightFrom.id:'',
      height_to:(this.selectedData.heightTo)?this.selectedData.heightTo.id:'',
      tongue:tongue,
      martialstatus:this.selectedData.marital_status,
      religion_id:this.selectedData.religion,
      community_id:community,
      country_id:country
    }).subscribe(res=>{
       this.loader.Hide();
       if(res.status)
       {
         console.log(res);
         this.toast.Notify({
          message:res.message,
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

  
}

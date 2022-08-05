import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ApiService } from 'src/app/provider/api.service';
import { LoaderService } from 'src/app/provider/loader.service';
import { ToastService } from 'src/app/provider/toast.service';
class Port {
  public id: number;
  public name: string;
}
@Component({
  selector: 'app-horoscope',
  templateUrl: './horoscope.page.html',
  styleUrls: ['./horoscope.page.scss'],
})
export class HoroscopePage implements OnInit {
  //ports: Port[];
  dropDown: any = {};
  selectedData: any = {
    myTimeFrom:new Date().toISOString()
  };
  public setting = [
    { val: 'Visible to all members', isChecked: false },
    { val: 'Visible to contacted and accepted members', isChecked: false },
    { val: 'Hide from all', isChecked: false }
  ];
  public format = [
    { val: 'South Indian', isChecked: false },
    { val: 'North Indian', isChecked: false },
    { val: 'East Indian', isChecked: false },
    { val: 'Kerala', isChecked: false }
  ];
  constructor(
    private router: Router,
    private loader: LoaderService,
    private api: ApiService,
    private toast: ToastService
  ) { 
  }
  
  save() {
    
    console.log('save:', this.selectedData);
    var time_of_birth = new Date(this.selectedData.time_of_birth).getHours();
    var time_of_birth_mi = new Date(this.selectedData.time_of_birth).getMinutes();
    var time_of_birthmam_pm = time_of_birth >= 12 ? "PM" : "AM";
    if(this.selectedData.country!=null){
      var country = this.selectedData.country.id
    }
    if(this.selectedData.state!=null){
      var state = this.selectedData.state.id
    }
    if(this.selectedData.city!=null){
      var city = this.selectedData.city.id
    }
    this.loader.Show('Loading...');
    this.api.postDataWithAuth('api/updateHoroscopeAdd',
    {
      country_id:country,
      state_id:state,
      city_id:city,
      format:this.selectedData.format,
      time_of_birth: time_of_birth + "|"+ time_of_birth_mi + "|"+ time_of_birthmam_pm + "|Exact",
      setting:this.selectedData.setting
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


  stateChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
    this.dropDown.cities = [];
    this.selectedData.city = null;
    this.api.postData('api/getCityArrayOrSingle',{
      state_id:[event.value.id]
    }).subscribe(res => {
      if (res.status) {
        //console.log(res);
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
        //console.log(res);
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
    this.api.getData('api/getCountries').subscribe(res => {
      if (res.status) {
        //console.log(res);
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

    this.getHoroscope()


  }

  getHoroscope(){

    this.loader.Show('Loading...');
    this.api.postDataWithAuth('api/getHoroscope',{}).subscribe(res => {
      this.loader.Hide();
      if (res.status) {
        //console.log(res.data.user_detail.horoscopeArray);
        if(res.data.user_detail.horoscopeArray && Object.keys(res.data.user_detail.horoscopeArray).length){    
          this.selectedData.country = (res.data.user_detail.horoscopeArray.country_id)?res.data.user_detail.horoscopeArray.country_id[0]:null;
          this.selectedData.state = (res.data.user_detail.horoscopeArray.state_id)?res.data.user_detail.horoscopeArray.state_id[0]:null;
          this.selectedData.city = (res.data.user_detail.horoscopeArray.city_id)?res.data.user_detail.horoscopeArray.city_id[0]:null;
          if(res.data.user_detail.horoscopeArray.time_of_birth!=null){
            var timeH = res.data.user_detail.horoscopeArray.time_of_birth.split('|')[0];
            var timeM = res.data.user_detail.horoscopeArray.time_of_birth.split('|')[1];
            var time_of_birth = new Date();
            
            //console.log(res.data.user_detail.horoscopeArray.time_of_birth);
            time_of_birth.setHours(timeH);
            time_of_birth.setMinutes(timeM);
            console.log(time_of_birth);
            this.selectedData.time_of_birth = time_of_birth.toISOString();
          }
          this.selectedData.setting = (res.data.user_detail.horoscopeArray.setting)?res.data.user_detail.horoscopeArray.setting:null;
          this.selectedData.format = (res.data.user_detail.horoscopeArray.format)?res.data.user_detail.horoscopeArray.format:null;
          // if(res.data.user_detail.horoscopeArray.setting!=null){
          //   this.selectedData.setting = res.data.user_detail.horoscopeArray.setting;
          // }
          // if(res.data.user_detail.horoscopeArray.format!=null){
          //   this.selectedData.format = res.data.user_detail.horoscopeArray.format;
          // }

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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/provider/api.service';
import { LoaderService } from 'src/app/provider/loader.service';
import { ToastService } from 'src/app/provider/toast.service';

@Component({
  selector: 'app-horoscopesetting',
  templateUrl: './horoscopesetting.page.html',
  styleUrls: ['./horoscopesetting.page.scss'],
})
export class HoroscopesettingPage implements OnInit {

  dropDown: any = {};
  selectedData: any = {};
  public horoscope_match_format = [
    { val: 'Ashtakoota', isChecked: false },
    { val: 'Dashakoota', isChecked: false }
  ];
  public nakshtra_check = [
    { val: 'Not Required', isChecked: false },
    { val: 'Required', isChecked: false }
  ];
  public papasamyam_check = [
    { val: 'Not Required', isChecked: false },
    { val: 'Required', isChecked: false }
  ];
  public manglik = [
    { val: 'Not Required', isChecked: false },
    { val: 'Ordinary Check Required', isChecked: false },
    { val: 'Strict Check Required', isChecked: false }
  ];
  public dasa = [
    { val: 'Not Required', isChecked: false },
    { val: 'Ordinary Check Required', isChecked: false },
    { val: 'Strict Check Required', isChecked: false }
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
    this.loader.Show('Loading...');
    this.api.postDataWithAuth('api/updateHoroscopeSetting',
    {
      horoscope_match_format:this.selectedData.horoscope_match_format,
      nakshtra_check:this.selectedData.nakshtra_check,
      papasamyam_check:this.selectedData.papasamyam_check,
      manglik:this.selectedData.manglik,
      dasa:this.selectedData.dasa
    }).subscribe(res=>{
       this.loader.Hide();
       if(res.status)
       {
         console.log(res);
         this.toast.Notify({
          message:res.message,
          duration:3000,
          color:'primary',
          position:'bottom'
        })
        this.router.navigateByUrl('/tabs');
       }
       else{
           this.toast.Notify({
          message:res.message,
          duration:3000,
          color:'primary',
          position:'bottom'
        })
       }
    })
  }

  ngOnInit() {

    this.getHoroscope()
  }

  getHoroscope(){
    this.loader.Show('Loading...');
    this.api.postDataWithAuth('api/getHoroscope',{}).subscribe(res => {
      this.loader.Hide();
      if (res.status) {
        if(res.data.user_detail.horoscopeArray && Object.keys(res.data.user_detail.horoscopeArray).length){
          if(res.data.user_detail.horoscopeArray.horoscope_match_format!=null){
            this.selectedData.horoscope_match_format = res.data.user_detail.horoscopeArray.horoscope_match_format;
          }
          if(res.data.user_detail.horoscopeArray.nakshtra_check!=null){
            this.selectedData.nakshtra_check = res.data.user_detail.horoscopeArray.nakshtra_check;
          }
          if(res.data.user_detail.horoscopeArray.papasamyam_check!=null){
            this.selectedData.papasamyam_check = res.data.user_detail.horoscopeArray.papasamyam_check;
          }
          if(res.data.user_detail.horoscopeArray.manglik!=null){
            this.selectedData.manglik = res.data.user_detail.horoscopeArray.manglik;
          }
          if(res.data.user_detail.horoscopeArray.dasa!=null){
            this.selectedData.dasa = res.data.user_detail.horoscopeArray.dasa;
          }
        }
     }
      else {
         this.toast.Notify({
          message:res.message,
          duration:3000,
          color:'primary',
          position:'bottom'
        })
      }
    })
  }
}

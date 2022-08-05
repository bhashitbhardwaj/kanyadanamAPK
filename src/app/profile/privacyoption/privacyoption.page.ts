import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/provider/api.service';
import { LoaderService } from 'src/app/provider/loader.service';
import { ToastService } from 'src/app/provider/toast.service';

@Component({
  selector: 'app-privacyoption',
  templateUrl: './privacyoption.page.html',
  styleUrls: ['./privacyoption.page.scss'],
})
export class PrivacyoptionPage implements OnInit {

  dropDown: any = {};
  selectedData: any = {};
  public name_privacy = [
    { val: 'visible', name: 'Visible to all Members', isChecked: false },
    { val: 'hide', name:'Hide my full name (Displays only Profile ID)', isChecked: false }
  ];
  public phone_privacy = [
    { val: 'visible', name: 'Visible to all Members', isChecked: false },
    { val: 'hide', name: 'Hide my Phone number', isChecked: false }
  ];
  public email_privacy = [
    { val: 'visible', name: 'Visible to all Members', isChecked: false },
    { val: 'hide', name: 'Hide my Email Address', isChecked: false }
  ];
  public income_privacy = [
    { val: 'visible', name: 'Visible to all Members', isChecked: false },
    { val: 'hide', name: 'Keep this private', isChecked: false }
  ];
  public visitor_privacy = [
    { val: 'yes', name: 'Let other Members know that I have visited their Profile', isChecked: false },
    { val: 'no', name: 'Do not let other Members know that I have visited their Profile', isChecked: false }
  ];
  public shortlist_privacy = [
    { val: 'yes', name: 'Let other Members know that I have shortlisted their Profile', isChecked: false },
    { val: 'no', name: 'Do not let other Members know that I have shortlisted their Profile', isChecked: false }
  ];
  
  public web_notification_privacy = [
    { val: 'subscribe', name:'Subscribe', isChecked: false },
    { val: 'unsubscribe', name: 'Unsubscribe', isChecked: false }
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
    this.api.postDataWithAuth('api/updatePrivacyOptions',
    {
      name_privacy:this.selectedData.name_privacy,
      phone_privacy:this.selectedData.phone_privacy,
      email_privacy:this.selectedData.email_privacy,
      income_privacy:this.selectedData.income_privacy,
      visitor_privacy:this.selectedData.visitor_privacy,
      shortlist_privacy:this.selectedData.shortlist_privacy,
      web_notification_privacy:this.selectedData.web_notification_privacy
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

  ngOnInit() {

    this.getPrivacyOptions()

  }

  getPrivacyOptions(){

    this.loader.Show('Loading...');
    this.api.postDataWithAuth('api/getPrivacyOptions',{}).subscribe(res => {
      this.loader.Hide();
      if (res.status) {
        console.log(res.data.user_detail);
        console.log(Object.keys(res.data.user_detail.privacyOptionArray).length);
        if(res.data.user_detail.privacyOptionArray && Object.keys(res.data.user_detail.privacyOptionArray).length){

          if(res.data.user_detail.privacyOptionArray.name_privacy!=null){
            this.selectedData.name_privacy = res.data.user_detail.privacyOptionArray.name_privacy;
          }
          if(res.data.user_detail.privacyOptionArray.phone_privacy!=null){
            this.selectedData.phone_privacy = res.data.user_detail.privacyOptionArray.phone_privacy;
          }
          if(res.data.user_detail.privacyOptionArray.email_privacy!=null){
            this.selectedData.email_privacy = res.data.user_detail.privacyOptionArray.email_privacy;
          }
          if(res.data.user_detail.privacyOptionArray.income_privacy!=null){
            this.selectedData.income_privacy = res.data.user_detail.privacyOptionArray.income_privacy;
          }
          if(res.data.user_detail.privacyOptionArray.visitor_privacy!=null){
            this.selectedData.visitor_privacy = res.data.user_detail.privacyOptionArray.visitor_privacy;
          }
          if(res.data.user_detail.privacyOptionArray.shortlist_privacy!=null){
            this.selectedData.shortlist_privacy = res.data.user_detail.privacyOptionArray.shortlist_privacy;
          }
          if(res.data.user_detail.privacyOptionArray.web_notification_privacy!=null){
            this.selectedData.web_notification_privacy = res.data.user_detail.privacyOptionArray.web_notification_privacy;
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

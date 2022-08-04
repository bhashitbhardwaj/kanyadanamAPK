import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ApiService } from 'src/app/provider/api.service';
import { LoaderService } from 'src/app/provider/loader.service';
import { ToastService } from 'src/app/provider/toast.service';

@Component({
  selector: 'app-emailandsmsalerts',
  templateUrl: './emailandsmsalerts.page.html',
  styleUrls: ['./emailandsmsalerts.page.scss'],
})
export class EmailandsmsalertsPage implements OnInit {
  dropDown: any = {};
  selectedData: any = {};
  public match_mail_photo_match_mail = [
    { val: 'daily', isChecked: false },
    { val: 'triweekly', isChecked: false },
    { val: 'weekly', isChecked: false },
    { val: 'unsubscribe', isChecked: false }
  ];
  public premium_match_mail = [
    { val: 'weekly', isChecked: false },
    { val: 'unsubscribe', isChecked: false }
  ];
  public recent_visitor_email = [
    { val: 'daily', isChecked: false },
    { val: 'weekly', isChecked: false }
  ];
  public member_who_shortlist_you_email = [
    { val: 'daily', isChecked: false },
    { val: 'unsubscribe', isChecked: false }
  ];
  public viewed_profile_email = [
    { val: 'weekly', isChecked: false },
    { val: 'unsubscribe', isChecked: false }
  ];
  public similar_profile = [
    { val: 'biweekly', isChecked: false },
    { val: 'unsubscribe', isChecked: false }
  ];
  public contact_alert = [
    { val: 'instant', isChecked: false },
    { val: 'daily', isChecked: false },
    { val: 'unsubscribe', isChecked: false }
  ];
  public message_recv_alert = [
    { val: 'daily', isChecked: false },
    { val: 'unsubscribe', isChecked: false }
  ];
  public kndnm_special = [
    { val: 'occasionally', isChecked: false },
    { val: 'unsubscribe', isChecked: false }
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
    this.api.postDataWithAuth('api/updateEmailAndSmsAlertDetails',
    {
      match_mail_photo_match_mail:this.selectedData.match_mail_photo_match_mail,
      premium_match_mail:this.selectedData.premium_match_mail,
      recent_visitor_email:this.selectedData.recent_visitor_email,
      member_who_shortlist_you_email:this.selectedData.member_who_shortlist_you_email,
      viewed_profile_email:this.selectedData.viewed_profile_email,
      similar_profile:this.selectedData.similar_profile,
      contact_alert:this.selectedData.contact_alert,
      message_recv_alert:this.selectedData.message_recv_alert,
      kndnm_special:this.selectedData.kndnm_special
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

  ngOnInit() {
    
  
    this.getEmailAndSmsAlertDetails()


  }


  getEmailAndSmsAlertDetails(){

    this.loader.Show('Loading...');
    this.api.postDataWithAuth('api/getEmailAndSmsAlertDetails',{}).subscribe(res => {
      this.loader.Hide();
      if (res.status) {
        console.log(res.data.user_detail);
        console.log(Object.keys(res.data.user_detail.alertsArray).length);
        if(res.data.user_detail.alertsArray && Object.keys(res.data.user_detail.alertsArray).length){

          if(res.data.user_detail.alertsArray.match_mail_photo_match_mail!=null){
            this.selectedData.match_mail_photo_match_mail = res.data.user_detail.alertsArray.match_mail_photo_match_mail;
          }
          if(res.data.user_detail.alertsArray.premium_match_mail!=null){
            this.selectedData.premium_match_mail = res.data.user_detail.alertsArray.premium_match_mail;
          }
          if(res.data.user_detail.alertsArray.recent_visitor_email!=null){
            this.selectedData.recent_visitor_email = res.data.user_detail.alertsArray.recent_visitor_email;
          }
          if(res.data.user_detail.alertsArray.member_who_shortlist_you_email!=null){
            this.selectedData.member_who_shortlist_you_email = res.data.user_detail.alertsArray.member_who_shortlist_you_email;
          }
          if(res.data.user_detail.alertsArray.viewed_profile_email!=null){
            this.selectedData.viewed_profile_email = res.data.user_detail.alertsArray.viewed_profile_email;
          }
          if(res.data.user_detail.alertsArray.similar_profile!=null){
            this.selectedData.similar_profile = res.data.user_detail.alertsArray.similar_profile;
          }
          if(res.data.user_detail.alertsArray.contact_alert!=null){
            this.selectedData.contact_alert = res.data.user_detail.alertsArray.contact_alert;
          }
          if(res.data.user_detail.alertsArray.message_recv_alert!=null){
            this.selectedData.message_recv_alert = res.data.user_detail.alertsArray.message_recv_alert;
          }
          if(res.data.user_detail.alertsArray.kndnm_special!=null){
            this.selectedData.kndnm_special = res.data.user_detail.alertsArray.kndnm_special;
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

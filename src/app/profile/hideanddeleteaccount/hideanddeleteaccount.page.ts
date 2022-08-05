import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ApiService } from 'src/app/provider/api.service';
import { LoaderService } from 'src/app/provider/loader.service';
import { ToastService } from 'src/app/provider/toast.service';

@Component({
  selector: 'app-hideanddeleteaccount',
  templateUrl: './hideanddeleteaccount.page.html',
  styleUrls: ['./hideanddeleteaccount.page.scss'],
})
export class HideanddeleteaccountPage implements OnInit {

  dropDown: any = {};
  selectedData: any = {};
  public is_hide = [
    { val: 1, name: 'Yes', isChecked: false },
    { val: 0, name: 'No', isChecked: false }
  ];
  public status = [
    { val: 2, name: 'Yes', isChecked: false },
    { val: 1, name: 'No', isChecked: false }
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
    this.api.postDataWithAuth('api/updateHideandDeleteAccount',
    {
      is_hide:this.selectedData.is_hide,
      status:this.selectedData.status
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
    this.getHideandDeleteAccount()
  }

  getHideandDeleteAccount(){

    this.loader.Show('Loading...');
    this.api.postDataWithAuth('api/getHideandDeleteAccount',{}).subscribe(res => {
      this.loader.Hide();
      if (res.status) {
        console.log(res.data.user_detail);
        //console.log(Object.keys(res.data.user_detail.alertsArray).length);
        if(res.data.user_detail && res.data.user_detail){

          if(res.data.user_detail.is_hide!=null){
            this.selectedData.is_hide = res.data.user_detail.is_hide;
          }
          if(res.data.user_detail.status!=null){
            this.selectedData.status = res.data.user_detail.status;
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/provider/api.service';
import { LoaderService } from 'src/app/provider/loader.service';
import { ToastService } from 'src/app/provider/toast.service';

@Component({
  selector: 'app-contactdetails',
  templateUrl: './contactdetails.page.html',
  styleUrls: ['./contactdetails.page.scss'],
})
export class ContactdetailsPage implements OnInit {
  selectedData: any = {
    myTimeTo:new Date().toISOString(),
    myTimeFrom:new Date().toISOString(),
    contact_display_setting:1
  };
  constructor(
    private router: Router,
    private loader: LoaderService,
    private api: ApiService,
    private toast: ToastService
  ) {
     
   }

   save()
   {
      console.log(this.selectedData.myTimeFrom);
      var myTimeFrom = new Date(this.selectedData.myTimeFrom).getHours()
      var myTimeFromam_pm = myTimeFrom >= 12 ? "PM" : "AM";
      var myTimeTo = new Date(this.selectedData.myTimeTo).getHours()
      var myTimeToam_pm = myTimeTo >= 12 ? "PM" : "AM";
      this.loader.Show('Loading...');
      this.api.postDataWithAuth('api/updateContactDetails',
      {
        contact_display_setting: this.selectedData.contact_display_setting,
        contact_person_name: this.selectedData.contact_person_name,
        relationship: this.selectedData.relationship,
        timefrom: myTimeFrom + "|"+myTimeFromam_pm,
        timeto: myTimeTo + "|"+myTimeToam_pm
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
     this.getContactFilters();
  }

  getContactFilters()
  {
    this.loader.Show('Loading...');
    this.api.postDataWithAuth('api/getContactDetails',{}).subscribe(res => {
      this.loader.Hide();
      if (res.status) {
        console.log(res.data.user_detail);
        if(res.data.user_detail)
        { 
          this.selectedData.mobile = res.data.user_detail.mobile;
          this.selectedData.contact_person_name = res.data.user_detail.contact_person_name;
          this.selectedData.relationship = res.data.user_detail.relationship;
          var timefrom = res.data.user_detail.timefrom.split('|')[0];
          var timeto = res.data.user_detail.timeto.split('|')[0]
          var myTimeFrom = new Date();
          myTimeFrom.setHours(timefrom);
          this.selectedData.myTimeFrom = myTimeFrom.toISOString();
          var myTimeTo = new Date();
          myTimeTo.setHours(timeto);
          this.selectedData.myTimeTo = myTimeTo.toISOString();
          this.selectedData.contact_display_setting = res.data.user_detail.contact_display_setting;
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

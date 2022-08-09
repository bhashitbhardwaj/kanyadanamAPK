import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../provider/api.service';
import { LoaderService } from '../provider/loader.service';
import { ToastService } from '../provider/toast.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  count:any = {
    invitation:0,
    accepted:0,
    sent:0,
    wishlist:0,
    decline:0
  };
  data:any = [];
  constructor(
    private router: Router,
    public modalCtrl: ModalController,
    private loader: LoaderService,
    private api: ApiService,
    private toast: ToastService
  ) {}

  ngOnInit()
  {
    this.inbox('invitation')
  }

  openDetailpage(uniq_id)
  {
    this.router.navigateByUrl('/member-detail',{ state:uniq_id});
  }
  
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
    this.inbox(ev.detail.value)
  }

  decline()
  {

  }

  accept()
  {
    
  }
  inbox(id:any)
  {
    console.log('Segment changed', id);
    this.loader.Show('Loading...');
    this.api.postDataWithAuth('api/getInboxResultByUniqueID',
    {
      "inbox_type": id,
      "res_start":0
    }).subscribe(res=>{
      this.loader.Hide();
      if(res.status && res.data.total_count)
      {
        console.log(res);
        this.data = res.data.user_detail;
        switch (id) {
            case "invitation":
              this.count = {
                invitation:res.data.total_count,
                accepted:0,
                sent:0,
                wishlist:0,
                decline:0
              };
            break;
            case "accepted":
              this.count = {
                invitation:0,
                accepted:res.data.total_count,
                sent:0,
                wishlist:0,
                decline:0
              };
            break;
            case "sent":
              this.count = {
                invitation:0,
                accepted:0,
                sent:res.data.total_count,
                wishlist:0,
                decline:0
              };
            break;
            case "wishlist":
              this.count = {
                invitation:0,
                accepted:0,
                sent:0,
                wishlist:res.data.total_count,
                decline:0
              };
            break;
            case "decline":
              this.count = {
                invitation:0,
                accepted:0,
                sent:0,
                wishlist:0,
                decline:res.data.total_count
              };
            break;
          default:
            break;
        }
      }
      else{
        this.data = [];
          this.toast.Notify({
            message:res.message,
            duration:3000,
            position:'top'
          })
      }
    })
  }
}

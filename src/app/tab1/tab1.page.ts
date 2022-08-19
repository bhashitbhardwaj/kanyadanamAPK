import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ApiService } from '../provider/api.service';
import { LoaderService } from '../provider/loader.service';
import { ToastService } from '../provider/toast.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public Loader: any;
  slideOpts = {
    slidesPerView: 2.2,
    freeMode: true
  }
  count:any = {
    new_matches:0,
    my_matches:0,
    recent_view:0
  };
  data:any = {
    new_matches:[],
    my_matches:[],
    recent_view:[]
  };
  constructor(
    private router: Router,
    private loader: LoaderService,
    private api: ApiService,
    private toast: ToastService,
    private route: ActivatedRoute,
    public loading: LoadingController
  ) {
    
  }

  openDetailpage(uniq_id)
  {
    this.router.navigateByUrl('/member-detail',{ state:uniq_id});
  }

  async showLoading() {
    this.Loader = await this.loading.create({
      message: 'Loading...'
    });
    this.Loader.present();
  }

   ngOnInit()
  {
    this.route.queryParams.subscribe(_p => {
      this.showLoading();
      this.inbox({
        "search_type":'new_matches',
        "res_start": 0
      })
      this.inbox({
        "search_type":'my_matches' ,
        "res_start": 0
      })
      this.inbox({
      "search_type":'recent_view' ,
      "res_start": 0
      })
    });
  }
  connect(item,connect)
  {
    this.api.postDataWithAuth('api/requestForConnect',{
      "to_id":item.id,
      "requestType":connect
    }
    ).subscribe(res=>{
      if(res.status)
      {
        console.log(res);
        item.isshow = false;
        this.toast.Notify({
          message:res.message,
          duration:3000,
          position:'top'
        })
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
  segmentChanged(ev: any) {
    if(ev)
    {
        this.router.navigateByUrl('/tabs/tab2',{ state: {
          "search_type":ev,
          "res_start": 0
        } });
    }
  }

  Hide() {
    if (this.Loader) {
      this.Loader.dismiss();
    }
    else{
      setTimeout(() => {
        if (this.Loader) {
          this.Loader.dismiss();
        }
      }, 5000);
    }
}

  inbox(id:any)
  {
    //this.loader.Show('Loading...')
    this.api.postDataWithAuth('api/search',id
    ).subscribe(res=>{
      this.Hide();
      if(res.status)
      {
        switch (id.search_type) {
          case "new_matches":
            this.count.new_matches = res.data.total_count;
            this.data.new_matches = res.data.user_detail;
            this.data.new_matches.map(user => user.isshow = true)
          break;
          case "my_matches":
            this.count.my_matches = res.data.total_count;
            this.data.my_matches = res.data.user_detail;
            this.data.my_matches.map(user => user.isshow = true)
          break;
          case "recent_view":
            this.count.recent_view = res.data.total_count;
            this.data.recent_view = res.data.user_detail;
            this.data.recent_view.map(user => user.isshow = true)
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

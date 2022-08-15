import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../provider/api.service';
import { LoaderService } from '../provider/loader.service';
import { ToastService } from '../provider/toast.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
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
    private toast: ToastService
  ) {
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
  }

  openDetailpage(uniq_id)
  {
    this.router.navigateByUrl('/member-detail',{ state:uniq_id});
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
  inbox(id:any)
  {
    this.api.postDataWithAuth('api/search',id
    ).subscribe(res=>{
      if(res.status && res.data.total_count)
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

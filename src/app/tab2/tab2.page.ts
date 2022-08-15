import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MatchfilterPage } from '../matchfilter/matchfilter.page';
import { ApiService } from '../provider/api.service';
import { LoaderService } from '../provider/loader.service';
import { ToastService } from '../provider/toast.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  selectedRefine:any;
  search_type:any;
  count:any = {
    new_matches:0,
    today_matches:0,
    my_matches:0,
    more_matches:0,
    recent_view:0
  };
  selectedTab:any;
  data:any = [];
  item: any;
  constructor(
    private router: Router,
    public modalCtrl: ModalController,
    private loader: LoaderService,
    private api: ApiService,
    private toast: ToastService,
    private route: ActivatedRoute,
    ) {
     
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
        if(connect == 'wishlist')
        {
          item.isshowWishlist = false;
        }
        else{
          item.isshow = false;
        }
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
    if(ev.detail.value)
    {
      this.inbox({
        "search_type":ev.detail.value ,
        "res_start": 0
    })
    }
  }

  ngOnInit()
  {
    this.route.queryParams.subscribe(_p => {
      const navParams = this.router.getCurrentNavigation().extras.state;
      if(navParams)
      {
        console.log('Segment changed', navParams);
        switch (navParams.search_type) {
          case "new_matches":
            this.selectedTab = 'new_matches';
          break;
          case "my_matches":
            this.selectedTab = 'my_matches';
          break;
          case "recent_view":
            this.selectedTab = 'recent_view';
          break;
          default:
            this.selectedTab = '';
            
          break;
       }
       this.count = {
        new_matches:0,
        today_matches:0,
        my_matches:0,
        more_matches:0,
        recent_view:0
      };
      this.inbox(navParams);
      }
      else{
        this.selectedTab = 'new_matches';
          this.inbox({
            "search_type":'new_matches',
            "res_start": 0
        })
      }
    })
  }

  inbox(id:any)
  {
    //this.loader.Show('Loading...');
    this.search_type = id.search_type;
    this.api.postDataWithAuth('api/search',id
    ).subscribe(res=>{
      //this.loader.Hide();
      if(res.status && res.data.total_count)
      {
        this.data = res.data.user_detail;
        this.data.map(user => {
          user.isshow = true,
          user.isshowWishlist = true
        });

        console.log(this.data);
        switch (id.search_type) {
            case "new_matches":
              this.count = {
                new_matches:res.data.total_count,
                today_matches:0,
                my_matches:0,
                more_matches:0,
                recent_view:0
              };
            break;
            case "today_matches":
              this.count = {
                new_matches:0,
                today_matches:res.data.total_count,
                my_matches:0,
                more_matches:0,
                recent_view:0
              };
            break;
            case "my_matches":
              this.count = {
                new_matches:0,
                today_matches:0,
                my_matches:res.data.total_count,
                more_matches:0,
                recent_view:0
              };
            break;
            case "more_matches":
              this.count = {
                new_matches:0,
                today_matches:0,
                my_matches:0,
                more_matches:res.data.total_count,
                recent_view:0
              };
            break;
            case "recent_view":
              this.count = {
                new_matches:0,
                today_matches:0,
                my_matches:0,
                more_matches:0,
                recent_view:res.data.total_count
              };
            break;
          default:
            break;
        }
      }
      else{
        this.data = [];
      }
    })
  }
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: MatchfilterPage,
      cssClass: 'product-zoom-modal',
      componentProps: {
        selectedRefine : this.selectedRefine
      },
      presentingElement: await this.modalCtrl.getTop()
    });
    await modal.present();
    await modal.onWillDismiss().then((result) => {
      console.log('result :>> ', result);
      if(result.data)
      {
        this.selectedRefine = result.data;
        var tongue =[];
        result.data.tongue= result.data.tongue || [];
        result.data.tongue.forEach(obj => {
          tongue.push(obj.tongue_id)
        });
        var heightFrom =[];
        result.data.heightFrom= result.data.heightFrom || [];
        result.data.heightFrom.forEach(obj => {
          heightFrom.push(obj.id)
        });
        var community =[];
        result.data.community= result.data.community || [];
        result.data.community.forEach(obj => {
          community.push(obj.id)
        });
        var country =[];
        result.data.country= result.data.country || [];
        result.data.country.forEach(obj => {
          country.push(obj.id)
        });
        var state =[];
        result.data.state= result.data.state || [];
        result.data.state.forEach(obj => {
          state.push(obj.id)
        });
        var city =[];
        result.data.city= result.data.city || [];
        result.data.city.forEach(obj => {
          city.push(obj.id)
        });
        var education =[];
        result.data.education= result.data.education || [];
        result.data.education.forEach(obj => {
          education.push(obj.id)
        });
        var profession_area =[];
        result.data.profession_area= result.data.profession_area || [];
        result.data.profession_area.forEach(obj => {
          profession_area.push(obj.id)
        });
        var annualincome =[];
        result.data.annual_income = result.data.annual_income || [];
        result.data.annual_income.forEach(obj => {
          annualincome.push(obj.id)
        });
        this.loader.Show('Loading...');
        this.api.postDataWithAuth('api/search',
        {
          search_type: (this.search_type == 'basic_search' || this.search_type == 'advance_search')? 'advance_search':this.search_type,
          age_range:result.data.age.lower+":"+result.data.age.upper,
          height:heightFrom,
          tongue:tongue,
          martialstatus:result.data.marital_status,
          religion:result.data.religion,
          country:country,
          community:community,
          state:state,
          city:city,
          education:education,
          workwith:result.data.workign_with,
          occupation:profession_area,
          annualincome:annualincome,
          res_start: 0
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
    }).catch((err) => {
      console.log('err :>> ', err);
    });
  
  }
}

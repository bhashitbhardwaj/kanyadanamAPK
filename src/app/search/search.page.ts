import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ApiService } from '../provider/api.service';
import { LoaderService } from '../provider/loader.service';
import { ToastService } from '../provider/toast.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  selectSegment:any = 1;
  dropDown: any = {};
  selectedData: any = {};
  constructor(
    private router: Router,
    private loader: LoaderService,
    private api: ApiService,
    private toast: ToastService
  ) {
    this.selectedData.age = { lower: 21, upper: 36 };
   }
   search()
   {
    var tongue =[];
    this.selectedData.tongue= this.selectedData.tongue || [];
    this.selectedData.tongue.forEach(obj => {
      tongue.push(obj.tongue_id)
    });
    var country =[];
    this.selectedData.country= this.selectedData.country || [];
    this.selectedData.country.forEach(obj => {
      country.push(obj.id)
    });
    var heightFrom =[];
    this.selectedData.heightFrom= this.selectedData.heightFrom || [];
    this.selectedData.heightFrom.forEach(obj => {
      heightFrom.push(obj.id)
    });
    this.router.navigate(['/tabs/tab2'],{ state: {
          search_type:"basic_search" ,
          age_range:this.selectedData.age.lower+":"+this.selectedData.age.upper,
          height:heightFrom,
          tongue:tongue,
          martialstatus:this.selectedData.marital_status,
          religion:this.selectedData.religion,
          country:country,
          res_start: 0
      } });
   }
   
  ngOnInit() {
    this.api.getData('api/getHeights').subscribe(res => {
      if (res.status) {
        console.log(res);
        this.dropDown.heightFrom = res.data;
      }
      else {
        this.toast.Notify({
          message: res.message,
          duration: 3000,
          position: 'top'
        })
      }
    })
    this.api.getData('api/getReligions').subscribe(res => {
      if (res.status) {
        console.log(res);
        this.dropDown.religions = res.data;
      }
      else {
        this.toast.Notify({
          message: res.message,
          duration: 3000,
          position: 'top'
        })
      }
    })
    this.api.getData('api/getTongues').subscribe(res => {
      if (res.status) {
        console.log(res);
        this.dropDown.tongues = res.data;
      }
      else {
        this.toast.Notify({
          message: res.message,
          duration: 3000,
          position: 'top'
        })
      }
    })

    this.api.getData('api/getMartialStatus').subscribe(res => {
      if (res.status) {
        console.log(res);
        this.dropDown.martialstatus = res.data;
      }
      else {
        this.toast.Notify({
          message: res.message,
          duration: 3000,
          position: 'top'
        })
      }
    })
    this.api.getData('api/getCountries').subscribe(res => {
      if (res.status) {
        console.log(res);
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
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    this.selectSegment = ev.detail.value;
  }
}

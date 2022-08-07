import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(
    private router: Router,
    public modalCtrl: ModalController,
    private loader: LoaderService,
    private api: ApiService,
    private toast: ToastService
    ) {}

  openDetailpage()
  {
    this.router.navigateByUrl('/member-detail');
  }

  showAlert()
  {
    
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
          search_type:"basic_search" ,
          age_range:result.data.age.lower+":"+result.data.age.upper,
          height:heightFrom,
          tongue:tongue,
          martialstatus:result.data.marital_status,
          religion:result.data.religion,
          country:country,
          community:community,
          state:state,
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

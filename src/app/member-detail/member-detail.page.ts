import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ImagesliderComponent } from '../imageslider/imageslider.component';
import { ApiService } from '../provider/api.service';
import { LoaderService } from '../provider/loader.service';
import { ToastService } from '../provider/toast.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.page.html',
  styleUrls: ['./member-detail.page.scss'],
})
export class MemberDetailPage implements OnInit {
  userData: any;
  constructor(private modalCtrl: ModalController,
    private router: Router,
    private loader: LoaderService,
    private api: ApiService,
    private toast: ToastService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(_p => {
      const navParams = this.router.getCurrentNavigation().extras.state;
      if(navParams)
      {
        console.log('Segment changed', navParams);
        this.loader.Show('Loading...');
        this.api.getProfileByID('api/getProfileByUniqueID',{},navParams)
        .subscribe(res => {
          this.loader.Hide();
          if (res.status) {
            console.log(res.data.user_detail);
            this.userData = res.data.user_detail;
            this.userData.user_details.tongue = this.userData.user_details.tongue && this.userData.user_details.tongue.map(user => user.tongue).join(', ');
           
            this.userData.partner_details.martialstatus = this.userData.partner_details.martialstatus && this.userData.partner_details.martialstatus.map(user => user.name).join(', ');

            this.userData.partner_details.religion = this.userData.partner_details.religion && this.userData.partner_details.religion.map(user => user.religion).join(', ');

            this.userData.partner_details.tongue = this.userData.partner_details.tongue && this.userData.partner_details.tongue.map(user => user.tongue).join(', ');

            this.userData.partner_details.community = this.userData.partner_details.community && this.userData.partner_details.community.map(user => user.community).join(', ');

            this.userData.partner_details.country_id = this.userData.partner_details.country_id && this.userData.partner_details.country_id.map(user => user.name).join(', ');

            this.userData.partner_details.state_id = this.userData.partner_details.state_id && this.userData.partner_details.state_id.map(user => user.name).join(', ');

            this.userData.partner_details.education_level = this.userData.partner_details.education_level && this.userData.partner_details.education_level.map(user => user.name).join(', ');

            this.userData.partner_details.workwith = this.userData.partner_details.workwith && this.userData.partner_details.workwith.map(user => user.name).join(', ');

            this.userData.partner_details.occupation = this.userData.partner_details.occupation && this.userData.partner_details.occupation.map(user => user.name).join(', ');

            this.userData.partner_details.annualincome = this.userData.partner_details.annualincome && this.userData.partner_details.annualincome.map(user => user.name).join(', ');
            
           
            
          }
          else {
            this.toast.Notify({
              message: res.message,
              duration: 3000,
              position: 'top'
            })
          }
        });
      }
    })
  }
  
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ImagesliderComponent,
      cssClass: 'product-zoom-modal',
      componentProps: {
        imgurl : "data"
  },
      presentingElement: await this.modalCtrl.getTop()
    });
    await modal.present();
    await modal.onWillDismiss().then((result) => {
      console.log('result :>> ', result);
      
    }).catch((err) => {
      console.log('err :>> ', err);
    });
  }
}

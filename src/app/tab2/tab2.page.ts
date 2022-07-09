import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MatchfilterPage } from '../matchfilter/matchfilter.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router,public modalCtrl: ModalController) {}

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

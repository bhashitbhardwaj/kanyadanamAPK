import { Component, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImagesliderComponent } from '../imageslider/imageslider.component';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.page.html',
  styleUrls: ['./member-detail.page.scss'],
})
export class MemberDetailPage implements OnInit {
 
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
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

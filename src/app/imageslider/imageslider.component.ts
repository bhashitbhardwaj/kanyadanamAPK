import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-imageslider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.scss'],
})
export class ImagesliderComponent implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    passiveListeners: false,
    zoom: {
      minRatio: 1,
      maxRatio: 3,
      toggle: true,
      containerClass :'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  };
  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}
  dismiss() {
    this.modalCtrl.dismiss();
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../provider/api.service';
import { LoaderService } from '../provider/loader.service';
import { ToastService } from '../provider/toast.service';

@Component({
  selector: 'app-images-slider',
  templateUrl: './images-slider.page.html',
  styleUrls: ['./images-slider.page.scss'],
})
export class ImagesSliderPage implements OnInit {
  @Input() imgurl: any;
  pics:any = [];
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
  constructor(public modalCtrl: ModalController,
    private loader: LoaderService,
    private api: ApiService,
    private toast: ToastService) {

   }

  ngOnInit() {
    console.log(this.imgurl);
    this.loader.Show('Loading...');
        this.api.getProfileByID('api/imageImagesAll',{},this.imgurl
        ).subscribe(res=>{
          this.loader.Hide();
          if(res.status)
          {
            console.log(res);
            this.pics = res.data.user_detail.userImageArray || [];
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
  dismiss() {
    this.modalCtrl.dismiss();
  }
}

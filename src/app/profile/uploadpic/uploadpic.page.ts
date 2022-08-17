import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActionSheetController, Platform } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { LoaderService } from 'src/app/provider/loader.service';
import { ApiService } from 'src/app/provider/api.service';
import { ToastService } from 'src/app/provider/toast.service';

@Component({
  selector: 'app-uploadpic',
  templateUrl: './uploadpic.page.html',
  styleUrls: ['./uploadpic.page.scss'],
})
export class UploadpicPage implements OnInit {
  @ViewChild('filePicker', { static: false }) filePickerRef: ElementRef<HTMLInputElement>;
  isDesktop: boolean;
  pics:any = [];
  isProfile:any;
  isFirstTime:boolean = false;
  constructor(
    private platform: Platform,
    private loader: LoaderService,
    private api: ApiService,
    private toast: ToastService,
    public actionSheetController: ActionSheetController,
    private sanitizer: DomSanitizer) { }

    ngOnInit() {
      console.log(this.platform.platforms());
      if ((this.platform.is('mobile') && this.platform.is('hybrid')) || this.platform.is('desktop')) {
        this.isDesktop = true;
      }
      this.loader.Show('Loading...');
        this.api.postDataWithAuth('api/imageImagesAll',{
        }
        ).subscribe(res=>{
          this.loader.Hide();
          if(res.status)
          {
            console.log(res);
            this.pics = res.data.user_detail.userImageArray;
            this.isProfile =  (res.data.profile_image_id)? res.data.profile_image_id.toString(): ""; 
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

    remove(id)
    {
      this.loader.Show('Loading...');
      this.api.postDataWithAuth('api/removeImage',{
        imageId:id
      }
      ).subscribe(res=>{
        this.loader.Hide();
        if(res.status)
        {
          console.log(res);
          this.pics.splice(this.pics.findIndex(a => a.id === id) , 1)
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

    radioSelect(data)
    {
      console.log(data);
      if(this.isFirstTime)
      {
        this.loader.Show('Loading...');
        this.api.postDataWithAuth('api/setProfileImage',{
          imageId:data.detail.value
        }
        ).subscribe(res=>{
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
      this.isFirstTime = true;
    }

    async presentActionSheet() {
      const actionSheet = await this.actionSheetController.create({
        header: 'Photo',
        cssClass: 'my-custom-class',
        buttons: [{
          text: 'Take Picture',
          icon: 'camera-outline',
          handler: () => {
            console.log('Share clicked');
            this.capture();
          }
        }, {
          text: 'From Photos',
          icon: 'image-outline',
          handler: () => {
            console.log('Favorite clicked');
            this.getPicture();
          }
        }]
      });
      await actionSheet.present();
  
      const { role, data } = await actionSheet.onDidDismiss();
      console.log('onDidDismiss resolved with role and data', role, data);
    }

  async getPicture() {
    if (!Capacitor.isPluginAvailable('Camera') || (this.isDesktop)) {
      this.filePickerRef.nativeElement.click();
      return;
    }
    
    const image = await Camera.getPhoto({
      quality: 100,
      width: 400,
      allowEditing: true,
      promptLabelCancel:'Cancel',
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos
    });
    if(image)
    {
      this.uploadpic(image.dataUrl);
    }
  }

  async capture() {
    if (!Capacitor.isPluginAvailable('Camera') || (this.isDesktop)) {
      this.filePickerRef.nativeElement.click();
      return;
    }
    
    const image = await Camera.getPhoto({
      quality: 100,
      width: 400,
      allowEditing: true,
      promptLabelCancel:'Cancel',
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    if(image)
    {
      this.uploadpic(image.dataUrl);
    }
  }

  uploadpic(dataUrl)
  {
    this.loader.Show('Loading...');
    this.api.postDataWithAuth('api/uploadImage',{
      "image_new":dataUrl
    }
    ).subscribe(res=>{
      this.loader.Hide();
      if(res.status)
      {
        console.log(res);
        this.pics.push({
          id: res.data.imgID,
          image: res.data.imgName
        });
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

  onFileChoose(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    const pattern = /image-*/;
    const reader = new FileReader();

    if (!file.type.match(pattern)) {
      console.log('File format not supported');
      return;
    }

    reader.onload = () => {
      this.uploadpic(reader.result.toString())
    };
    reader.readAsDataURL(file);
  }
}

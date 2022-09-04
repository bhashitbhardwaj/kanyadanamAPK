import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popovermenu',
  templateUrl: './popovermenu.page.html',
  styleUrls: ['./popovermenu.page.scss'],
})
export class PopovermenuPage implements OnInit {
  @Input() user_id: any;
  constructor(private router: Router,
    public popoverController: PopoverController,
    public actionSheetController: ActionSheetController) { }

  ngOnInit() {
    console.log(this.user_id);
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Contact Details',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Contact: 8523882090',
          icon: 'call-outline',
          handler: () => {
            console.log('Delete clicked');
          },
        },
        {
          text: 'Email: xxxsaini@gmail.com',
          icon: 'mail-outline',
          handler: () => {
            console.log('Share clicked');
          },
        }
      ],
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  open(id) {
    switch (id) {
      case 1:
        this.popoverController.dismiss();
        this.presentActionSheet();
        break;
      case 2:
        this.popoverController.dismiss();
        this.router.navigateByUrl('/member-detail', { state: this.user_id });
        break;
      case 3:

        break;
      default:
        break;
    }
    console.log(this.user_id);
  }

}

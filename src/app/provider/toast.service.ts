import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toast: any;
  constructor(public _toast: ToastController) {
  }
  async Notify(data: object) {
    if (this.toast) {
      this.toast.dismiss();
    }
    data['dismissOnPageChange'] = true;
    data['clickHandler'] = function(t, isClosed) {
    }
    this.toast = await this._toast.create(data);
    this.toast.present();
  }

  async NotifyWithoutButton(data: object) {
    if (this.toast) {
      this.toast.dismiss();
    }
    this.toast = await this._toast.create(data);
    this.toast.present();
  }
}
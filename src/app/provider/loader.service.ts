import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public Loader: any;
  constructor(public loading: LoadingController) { }

  async Show(content: string) {
    this.Loader = await this.loading.create({
      message: content
    });
    
    this.Loader.present();
  }

  Hide(): void {
    if (this.Loader) {
      this.Loader.dismiss();
    }
  }

}

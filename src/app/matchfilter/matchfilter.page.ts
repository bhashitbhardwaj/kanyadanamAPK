import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';
class Port {
  public id: number;
  public name: string;
}
@Component({
  selector: 'app-matchfilter',
  templateUrl: './matchfilter.page.html',
  styleUrls: ['./matchfilter.page.scss'],
})
export class MatchfilterPage implements OnInit {
  ports: Port[];
  port: Port;
  constructor(public modalCtrl: ModalController) { 
    this.ports = [
      { id: 1, name: 'Tokai' },
      { id: 2, name: 'Vladivostok' },
      { id: 3, name: 'Navlakhi' }
    ];
  }

  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
  }
  ngOnInit() {
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
}

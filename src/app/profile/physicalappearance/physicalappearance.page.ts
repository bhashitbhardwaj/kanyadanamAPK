import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
class Port {
  public id: number;
  public name: string;
}
@Component({
  selector: 'app-physicalappearance',
  templateUrl: './physicalappearance.page.html',
  styleUrls: ['./physicalappearance.page.scss'],
})
export class PhysicalappearancePage implements OnInit {

  ports: Port[];
  port: Port;
  constructor() { 
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

}

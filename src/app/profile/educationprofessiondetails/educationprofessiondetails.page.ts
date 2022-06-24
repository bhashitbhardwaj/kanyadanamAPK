import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
class Port {
  public id: number;
  public name: string;
}
@Component({
  selector: 'app-educationprofessiondetails',
  templateUrl: './educationprofessiondetails.page.html',
  styleUrls: ['./educationprofessiondetails.page.scss'],
})
export class EducationprofessiondetailsPage implements OnInit {

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

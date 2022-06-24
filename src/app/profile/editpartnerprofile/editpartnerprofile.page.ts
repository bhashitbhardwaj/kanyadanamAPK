import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
class Port {
  public id: number;
  public name: string;
}
@Component({
  selector: 'app-editpartnerprofile',
  templateUrl: './editpartnerprofile.page.html',
  styleUrls: ['./editpartnerprofile.page.scss'],
})
export class EditpartnerprofilePage implements OnInit {
  public form = [
    { val: 'Doesnt matter', isChecked: true },
    { val: 'Self', isChecked: false },
    { val: 'Parent / Guardian', isChecked: false },
    { val: 'Sibling / Friend /Others', isChecked: false }
  ];
  public diet = [
    { val: 'Doesnt matter', isChecked: true },
    { val: 'Vegetarian', isChecked: false },
    { val: 'Non-Vegetarian', isChecked: false },
    { val: 'Vegan', isChecked: false }
  ];
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

import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
class Port {
  public id: number;
  public name: string;
}
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  ports: Port[];
  port: Port;
  constructor() {
    this.ports = [
      { id: 1, name: '4 Feet 1 Inch' },
      { id: 2, name: '4 Feet 2 Inch' },
      { id: 3, name: '4 Feet 3 Inch' }
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

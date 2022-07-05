import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactdetails',
  templateUrl: './contactdetails.page.html',
  styleUrls: ['./contactdetails.page.scss'],
})
export class ContactdetailsPage implements OnInit {
  myTimeTo=new Date().toISOString();;
  myTimeFrom=new Date().toISOString();;
  constructor() {
     
   }

  ngOnInit() {
  }

}

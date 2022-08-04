import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ApiService } from 'src/app/provider/api.service';
import { LoaderService } from 'src/app/provider/loader.service';
import { ToastService } from 'src/app/provider/toast.service';

@Component({
  selector: 'app-privacyoption',
  templateUrl: './privacyoption.page.html',
  styleUrls: ['./privacyoption.page.scss'],
})
export class PrivacyoptionPage implements OnInit {

  dropDown: any = {};
  selectedData: any = {};
  public name_privacy = [
    { val: 'visible', name: '', isChecked: false },
    { val: 'hide', name:'Hide my full name (Displays only Profile ID)', isChecked: false }
  ];
  public phone_privacy = [
    { val: 'visible', name: 'Visible to all Members', isChecked: false },
    { val: 'hide', name: 'Hide my Phone number', isChecked: false }
  ];
  public email_privacy = [
    { val: 'visible', name: 'Visible to all Members', isChecked: false },
    { val: 'hide', name: 'Hide my Email Address', isChecked: false }
  ];
  public income_privacy = [
    { val: 'visible', name: 'Visible to all Members', isChecked: false },
    { val: 'hide', name: 'Keep this private', isChecked: false }
  ];
  public visitor_privacy = [
    { val: 'yes', name: 'Let other Members know that I have visited their Profile', isChecked: false },
    { val: 'no', name: 'Do not let other Members know that I have visited their Profile', isChecked: false }
  ];
  public shortlist_privacy = [
    { val: 'yes', name: 'Let other Members know that I have shortlisted their Profile', isChecked: false },
    { val: 'no', name: 'Do not let other Members know that I have shortlisted their Profile', isChecked: false }
  ];
  public do_not_disturb = [
    { val: 'instant', isChecked: false },
    { val: 'daily', isChecked: false },
    { val: 'unsubscribe', isChecked: false }
  ];
  public web_notification_privacy = [
    { val: 'subscribe', name:'Subscribe', isChecked: false },
    { val: 'unsubscribe', name: 'Unsubscribe', isChecked: false }
  ];
  
  
  constructor(
    private router: Router,
    private loader: LoaderService,
    private api: ApiService,
    private toast: ToastService
  ) {
  }

  ngOnInit() {
  }

}

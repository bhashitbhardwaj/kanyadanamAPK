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
  public match_mail_photo_match_mail = [
    { val: 'daily', isChecked: false },
    { val: 'triweekly', isChecked: false },
    { val: 'weekly', isChecked: false },
    { val: 'unsubscribe', isChecked: false }
  ];
  public premium_match_mail = [
    { val: 'weekly', isChecked: false },
    { val: 'unsubscribe', isChecked: false }
  ];
  public recent_visitor_email = [
    { val: 'daily', isChecked: false },
    { val: 'weekly', isChecked: false }
  ];
  public member_who_shortlist_you_email = [
    { val: 'daily', isChecked: false },
    { val: 'unsubscribe', isChecked: false }
  ];
  public viewed_profile_email = [
    { val: 'weekly', isChecked: false },
    { val: 'unsubscribe', isChecked: false }
  ];
  public similar_profile = [
    { val: 'biweekly', isChecked: false },
    { val: 'unsubscribe', isChecked: false }
  ];
  public contact_alert = [
    { val: 'instant', isChecked: false },
    { val: 'daily', isChecked: false },
    { val: 'unsubscribe', isChecked: false }
  ];
  public message_recv_alert = [
    { val: 'daily', isChecked: false },
    { val: 'unsubscribe', isChecked: false }
  ];
  public kndnm_special = [
    { val: 'occasionally', isChecked: false },
    { val: 'unsubscribe', isChecked: false }
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

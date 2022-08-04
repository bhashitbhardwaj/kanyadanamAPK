import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ApiService } from 'src/app/provider/api.service';
import { LoaderService } from 'src/app/provider/loader.service';
import { ToastService } from 'src/app/provider/toast.service';


@Component({
  selector: 'app-physicalappearance',
  templateUrl: './physicalappearance.page.html',
  styleUrls: ['./physicalappearance.page.scss'],
})
export class PhysicalappearancePage implements OnInit {

  dropDown: any = {};
  selectedData: any = {};
  public body_type = [
    { val: 'Slim', isChecked: false },
    { val: 'Athletic', isChecked: false },
    { val: 'Average', isChecked: false },
    { val: 'Heavy', isChecked: false }
  ];
  public skin_tone = [
    { val: 'Very Fair', isChecked: false },
    { val: 'Fair', isChecked: false },
    { val: 'Wheatish', isChecked: false },
    { val: 'Dark', isChecked: false }
  ];
  public disability = [
    { val: 'None', isChecked: false },
    { val: 'Physical Disability', isChecked: false }
  ];

  constructor(
    private router: Router,
    private loader: LoaderService,
    private api: ApiService,
    private toast: ToastService
  ) {
  }


  ngOnInit() {
    
    this.api.getData('api/getHeights').subscribe(res => {
      if (res.status) {
        console.log(res);
        this.dropDown.height = res.data;
      }
      else {
        this.toast.Notify({
          message: res.message,
          duration: 3000,
          position: 'top'
        })
      }
    })
    


  }

  


}

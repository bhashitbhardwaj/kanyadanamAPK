import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../provider/api.service';
import { LoaderService } from '../provider/loader.service';
import { StorageService } from '../provider/storage.service';
import { ToastService } from '../provider/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  rForm: FormGroup;
  constructor(
    private router: Router,
    private loginForm: FormBuilder,
    private loader: LoaderService,
    private api: ApiService,
    private toast: ToastService,
    private storage: StorageService
  ) {
    this.rForm = this.loginForm.group({
      'email': ["", Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ])],
      'password': [null]
    });
   }

  ngOnInit() {

  }
  
  login()
  {
    this.loader.Show('Loading...');
    this.api.postData('api/login',this.rForm.value).subscribe(res=>{
       this.loader.Hide();
       if(res.status)
       {
         console.log(res);
         this.storage.Set('userData',res.data);
         this.router.navigateByUrl('/tabs');
       }
       else{
          this.toast.Notify({
            message:res.message,
            duration:3000,
            position:'top'
          })
       }
    })
  }
}

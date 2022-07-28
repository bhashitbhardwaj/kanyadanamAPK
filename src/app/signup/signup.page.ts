import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../provider/api.service';
import { LoaderService } from '../provider/loader.service';
import { ToastService } from '../provider/toast.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  rForm: FormGroup;
  constructor(
    private router: Router,
    private signupForm: FormBuilder,
    private loader: LoaderService,
    private api: ApiService,
    private toast: ToastService
  ) {
    this.rForm = this.signupForm.group({
      name: [null,Validators.required],
      dob:[null,Validators.required],
      gender:["Male",Validators.required],
      create_profile_for:[null,Validators.required],
      mobile:[null,Validators.compose([ 
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10)])],
      email: ["", Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        ])],
      password:[null,Validators.required]
    });
   }
  
  ngOnInit() {
  }

  signup()
  {
    this.loader.Show('Loading...');
    var dateFormat = this.rForm.value.dob.split('T')[0]; 
    var dob = dateFormat.split('-');
    this.rForm.value.dobday = dob[2];
    this.rForm.value.dobmonth = dob[1];
    this.rForm.value.dobyear = dob[0];
    this.api.postData('api/register',this.rForm.value).subscribe(res=>{
       this.loader.Hide();
       if(res.status)
       {
         console.log(res)
         this.router.navigateByUrl('/tabs');
       }
       else{
          this.toast.Notify({
            message: JSON.stringify(res.errors),
            duration:3000,
            position:'top'
          })
       }
    })
  }
}

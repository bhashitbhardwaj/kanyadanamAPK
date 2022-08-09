import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../provider/api.service';
import { LoaderService } from '../provider/loader.service';
import { ToastService } from '../provider/toast.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  rForm: FormGroup;
  constructor(
    private signupForm: FormBuilder,
    private loader: LoaderService,
    private api: ApiService,
    private toast: ToastService,
    private router: Router,
  ) {
    this.rForm = this.signupForm.group({
      email: ["", Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        ])]
    });
   }

  ngOnInit() {
  }

  forgot()
  {
    this.loader.Show('Loading...');
    this.api.postData('api/forgot',this.rForm.value).subscribe(res=>{
       this.loader.Hide();
       if(res.status)
       {
         console.log(res);
         this.toast.Notify({
          message: res.message,
          duration:3000,
          position:'top'
        })
        this.router.navigateByUrl('/login');
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

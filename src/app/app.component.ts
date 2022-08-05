import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from './provider/auth-guard.service';
import { StorageService } from './provider/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private storage: StorageService,
    private AuthGuardService:AuthGuardService,
    private router: Router
  ) {
     
  }
  ionViewWillEnter()
  {
     console.log('ionViewWillEnter');
  }
  ngOnInit()
  {
     console.log('ngOnInitapp');
  }
  ionViewDidEnter()
  {
     console.log('ionViewDidEnter');
  }
  logout()
  {
    this.storage.Clear('userData');
    this.router.navigate(['login']);
  }
}

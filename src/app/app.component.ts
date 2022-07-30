import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './provider/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isLogin:boolean = false;
  constructor(
    private storage: StorageService,
    private router: Router
  ) {
     var data:any = this.storage.Get('userData');
     this.isLogin = (data && data.uniq_id)? true : false;
  }

  logout()
  {
    this.storage.ClearAll();
    this.router.navigate(['login']);
  }
}

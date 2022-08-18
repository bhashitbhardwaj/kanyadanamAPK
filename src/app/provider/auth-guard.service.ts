import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { StorageService } from './storage.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  islogin:boolean = false;
  constructor(
    private router: Router,
    private storage: StorageService
  ) {
    var userdata:any = this.storage.Get('userData');
    if ( userdata && userdata.uniq_id) {
      this.islogin = true;
    }
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    var userdata:any = this.storage.Get('userData');
    if ( !userdata || !userdata.uniq_id) {
      this.router.navigate(['login']);
      return false;
    }
    else if(!userdata.is_profile_complete)
    {
      this.router.navigate(['/profile/editprofile'],{ state: {
        tab: 1
    } });
      return false;
    }
    return true;
  }

  isLogin()
  {
    var userdata:any = this.storage.Get('userData');
    if ( userdata && userdata.uniq_id) {
      this.islogin = true;
    }
  }
}
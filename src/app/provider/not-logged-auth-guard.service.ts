import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class NotLoggedAuthGuardService implements CanActivate {
  islogin:boolean = false;
  constructor(
    private router: Router,
    private storage: StorageService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    var userdata:any = this.storage.Get('userData');
    if ( userdata && userdata.uniq_id) {
      this.router.navigate(['tabs']);
      return false;
    }
    return true;
  }
}
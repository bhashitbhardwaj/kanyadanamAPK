import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { computeStackId } from '@ionic/angular/directives/navigation/stack-utils';
import { ApiService } from '../provider/api.service';
import { LoaderService } from '../provider/loader.service';
import { ToastService } from '../provider/toast.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  userlist: any = [];
  masterData: any = [];
  stopInterval: any;
  constructor(
    private loader: LoaderService,
    private api: ApiService,
    private toast: ToastService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(_p => {
      this.getUserList(1);
    });
  }

  chat(id) {
    clearInterval(this.stopInterval)
    this.router.navigate(['/chat'], {
      state: {
        id: id
      }
    });
  }

  ionViewWillLeave()
  {
    console.log("ionViewWillLeave");
    clearInterval(this.stopInterval)
  }

  getUserList(isShowLoader) {
    (isShowLoader) ? this.loader.Show('Loading...') : '';
    this.api.postDataWithAuth('api/getAllChatUserList', {
    }
    ).subscribe(res => {
      this.loader.Hide();
      if (res.status) {
        console.log(res);
        this.masterData = res.data.user_detail.data || []
        this.userlist = res.data.user_detail.data || []
        this.stopInterval = setTimeout(() => {
          this.getUserList(0);
        }, res.data.user_detail.refresh_time_sec * 1000);
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

  search(text) {
    console.log(text.detail.value);
    this.userlist = this.masterData;
    const val = text.target.value;
    if (val && val.trim() !== '') {
      this.userlist = this.userlist.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {

    }
  }
}

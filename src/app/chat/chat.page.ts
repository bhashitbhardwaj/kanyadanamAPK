import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopovermenuPage } from '../popovermenu/popovermenu.page';
import { ApiService } from '../provider/api.service';
import { LoaderService } from '../provider/loader.service';
import { ToastService } from '../provider/toast.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild('content') private content: any;
  @ViewChild('popover') popover;
  isOpen = false;
  data:any;
  msg:any = "";
  stopInterval:any;
  constructor(
    private loader: LoaderService,
    private api: ApiService,
    private toast: ToastService,
    private router: Router,
    private route: ActivatedRoute,
    public popoverController: PopoverController
  ) {
    
   }

   async presentPopover(e: Event) {
    const popover = await this.popoverController.create({
      component: PopovermenuPage,
      event: e,
      componentProps: {
        user_id : this.data.toUserDetailsArray.uniq_id
      }
    });

    await popover.present();
    const { role } = await popover.onDidDismiss();
  }

  openDetailpage(uniq_id)
  {
    this.router.navigateByUrl('/member-detail',{ state:uniq_id});
  }
  
  send()
  {
    if(this.msg)
    {
      this.api.postDataWithAuth('api/sendMessage',{
        "to_user_id":this.data.toUserDetailsArray.user_id,
        "chat_message": this.msg
     }
      ).subscribe(res=>{
        this.loader.Hide();
        if(res.status)
        {
          console.log(res);
          this.data.data = this.data.data.concat(res.data.data);
          this.data.data.push({
            is_right_msg: 1,
            message: this.msg,
            last_msg_sent_time: new Date().getHours() + ":"+ new Date().getMinutes()
          })
          this.content.scrollToBottom();
          this.msg = "";
        }
        else{
             this.toast.Notify({
          message:res.message,
          duration:3000,
          color:'primary',
          position:'bottom'
        })
        }
      })
    }
    
  }

  getAllChat(id)
  {
        this.loader.Show('Loading...')
        this.api.postDataWithAuth('api/getAllChatOFUser',{
          "to_user_id":id
        }
        ).subscribe(res=>{
          this.loader.Hide();
          if(res.status)
          {
            console.log(res);
            this.data = res.data.user_detail;
            this.content.scrollToBottom();
            this.stopInterval = setInterval(() => {
              this.getUnreadMsg();
            }, 10000);
          }
          else{
               this.toast.Notify({
          message:res.message,
          duration:3000,
          color:'primary',
          position:'bottom'
        })
          }
        })
  }

  getUnreadMsg()
  {
    this.api.postDataWithAuth('api/getRealTimeChatMsg',{
      "to_user_id":this.data.toUserDetailsArray.user_id
    }
    ).subscribe(res=>{
      if(res.status)
      {
        console.log(res);
        this.data.data = this.data.data.concat(res.data.user_detail.data);
        this.content.scrollToBottom();
      }
      else{
           this.toast.Notify({
          message:res.message,
          duration:3000,
          color:'primary',
          position:'bottom'
        })
      }
    })
  }
  
  ngOnDestroy()
  {
    console.log("ngOnDestroy");
    clearInterval(this.stopInterval)
  }

  ngOnInit() {
    this.route.queryParams.subscribe(_p => {
      const navParams = this.router.getCurrentNavigation().extras.state;
      if(navParams)
      {
        this.getAllChat(navParams.id);
      }
      })
  }

}

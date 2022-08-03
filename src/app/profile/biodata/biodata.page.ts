import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/provider/api.service';
import { LoaderService } from 'src/app/provider/loader.service';
import { ToastService } from 'src/app/provider/toast.service';


@Component({
  selector: 'app-biodata',
  templateUrl: './biodata.page.html',
  styleUrls: ['./biodata.page.scss'],
})
export class BiodataPage implements OnInit {
  biodata: any;
  selectedData: any = {};
  constructor(
    private router: Router,
    private loader: LoaderService,
    private api: ApiService,
    private toast: ToastService
  ) { }
  
  //Save data Function
  save() {
    // this.selectedData.diets = []
    // this.dropDown.diets.forEach(obj => {
    //   if (obj.isChecked) {
    //     this.selectedData.diets.push(obj.name);
    //   }
    // });
    // this.selectedData.owners = []
    // this.owners.forEach(obj => {
    //   if (obj.isChecked) {
    //     this.selectedData.owners.push(obj.val);
    //   }
    // });
    // var tongue =[];
    // this.selectedData.tongue= this.selectedData.tongue || [];
    // this.selectedData.tongue.forEach(obj => {
    //   tongue.push(obj.tongue_id)
    // });
    // var community =[];
    // this.selectedData.community= this.selectedData.community || [];
    // this.selectedData.community.forEach(obj => {
    //   community.push(obj.id)
    // });
    // var country =[];
    // this.selectedData.country= this.selectedData.country || [];
    // this.selectedData.country.forEach(obj => {
    //   country.push(obj.id)
    // });
    // var state =[];
    // this.selectedData.state= this.selectedData.state || [];
    // this.selectedData.state.forEach(obj => {
    //   state.push(obj.id)
    // });
    // var education =[];
    // this.selectedData.education= this.selectedData.education || [];
    // this.selectedData.education.forEach(obj => {
    //   education.push(obj.id)
    // });
    // var profession_area =[];
    // this.selectedData.profession_area= this.selectedData.profession_area || [];
    // this.selectedData.profession_area.forEach(obj => {
    //   profession_area.push(obj.id)
    // });
    // var annualincome =[];
    // this.selectedData.annual_income = this.selectedData.annual_income || [];
    // this.selectedData.annual_income.forEach(obj => {
    //   annualincome.push(obj.id)
    // });
    console.log('save:', this.selectedData);
    this.loader.Show('Loading...');
    this.api.postDataWithAuth('api/updateBiodata',
    {
      height:this.selectedData.height,
      mobile:this.selectedData.mobile,
      education:this.selectedData.education,
      address:this.selectedData.address,
      self_gotra:this.selectedData.self_gotra,
      mother_gotra:this.selectedData.mother_gotra,
      dadi_gotra:this.selectedData.dadi_gotra,
      nani_gotra:this.selectedData.nani_gotra,
      father_name:this.selectedData.father_name,
      father_occupation:this.selectedData.father_occupation,
      mother_name:this.selectedData.mother_name,
      mother_occupation:this.selectedData.mother_occupation,
      siblings:this.selectedData.siblings,
      status:1,
     
    }).subscribe(res=>{
       this.loader.Hide();
       if(res.status)
       {
         console.log(res);
         this.toast.Notify({
          message:res.msg,
          duration:3000,
          position:'top'
        })
        this.router.navigateByUrl('/profile');
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



  ngOnInit() {

    //Get Data from Biodata API and Populate with the respactive fields

    this.api.postDataWithAuth('api/getBiodataByUniqueID', {}).subscribe(res => {
      if (res.status) {
        console.log(res);
        this.biodata = res.data;
        if(res.data.user_detail && res.data.user_detail){
            this.selectedData.name = res.data.user_detail.name;
            this.selectedData.dob = res.data.user_detail.dob;
            this.selectedData.email = res.data.user_detail.email;
            if(res.data.user_detail.biodata!=null){           
              this.selectedData.mobile = res.data.user_detail.biodata.mobile;
              this.selectedData.education = res.data.user_detail.biodata.education;
              this.selectedData.address = res.data.user_detail.biodata.address;
              this.selectedData.height = res.data.user_detail.biodata.height;
              this.selectedData.self_gotra = res.data.user_detail.biodata.self_gotra;
              this.selectedData.mother_gotra = res.data.user_detail.biodata.mother_gotra;
              this.selectedData.dadi_gotra = res.data.user_detail.biodata.dadi_gotra;
              this.selectedData.nani_gotra = res.data.user_detail.biodata.nani_gotra;
              this.selectedData.father_name = res.data.user_detail.biodata.father_name;
              this.selectedData.father_occupation = res.data.user_detail.biodata.father_occupation;
              this.selectedData.mother_name = res.data.user_detail.biodata.mother_name;
              this.selectedData.mother_occupation = res.data.user_detail.biodata.mother_occupation;
              this.selectedData.siblings = res.data.user_detail.biodata.siblings;
            }

          
        }
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

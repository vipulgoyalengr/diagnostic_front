import { Component, OnInit } from '@angular/core';
import { Test11Service } from '../test11.service';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit {
style1="none";
app1;
img;
flag=0;
arr:any;
a;
i;
j;
  constructor(public tst:Test11Service,public toastr:ToastrManager) {
    this.tst.lab()
    .subscribe((res)=>{
      // console.log(res);
      this.arr=res;
      this.j=0;
     
this.a=this.tst.get_email();
    })
   }
menu(z){
 
  // this.flag=0;
  if(this.style1=="none"){
    // console.log(this.style1="none");
    this.style1="block";
    // this.flag=1;
  
}
  
  else if(!this.app1){
    
      this.toastr.warningToastr('Enter All Fields', 'Alert!');

    }
   
    else{
      // alert("Appointment Booked");
      // this.toastr.warningToastr('Enter All Fields', 'Alert!');
      console.log("yo");
      this.tst.patient_booking(this.a,this.app1,z.Lab_usr,z.Lab_name,z.Address).subscribe((res)=>{
        console.log(res);
      });
      // console.log(this.a);
      // console.log(this.app1);
      // console.log(this.arr[0].Lab_usr);
      // console.log(this.arr[0].Lab_name);
      // console.log(this.arr[0].Address);
      this.toastr.successToastr('Appointment Booked', 'Success!');
    }
  
  // this.flag=1;
}
  ngOnInit() {
  }

}

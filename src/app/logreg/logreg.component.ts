import { Component, OnInit } from '@angular/core';
import { Test11Service } from '../test11.service';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-logreg',
  templateUrl: './logreg.component.html',
  styleUrls: ['./logreg.component.css']
})
export class LogregComponent implements OnInit {
lname;
email;
email1=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
pass;
cpass;
owner;
address;
rating;
cont;
cont1=/^\d{10}$/;
  constructor(public test1:Test11Service,public router:Router,public toastr:ToastrManager) { }
reg(){
  let done=this.email1.test(this.email);
  let done1 =this.cont1.test(this.cont)
  if(!this.lname||!this.email||!this.pass||!this.owner||!this.address||!this.rating){
    // alert("Enter all fields");
    this.toastr.warningToastr('Enter All Fields', 'Alert!');
  }
  else if(!done && !done1){
    if(!done1){
      // alert("Enter valid contact");
      this.toastr.warningToastr('Enter valid Contact', 'Alert!');
    
    }
    else if(!done && !done1){
      // alert("enter valid details");
      this.toastr.warningToastr('Enter valid Details', 'Alert!');
    }
    else {
      // alert("enter valid email");
      this.toastr.warningToastr('Enter valid email', 'Alert!');
    }
  }
  else if(this.pass!=this.cpass||this.pass.length<8||this.rating>5){
    if(this.pass!=this.cpass){
      // alert("Password doesn't match");
      this.toastr.errorToastr('Password dont match', 'Oops!');
      }
     else if(this.pass.length<8){
        // this.passflag=1;
        // alert("Minimum Password length is 8");
        this.toastr.infoToastr('Minimum Password length is 8', 'Info');
      }
      if(this.rating>5){
        // alert("Enter valid rating");
        this.toastr.warningToastr('Enter valid Rating', 'Alert!');
      }
  }
  else {
    // alert("registration successful");
    this.toastr.successToastr('Registration Successful', 'Success!');
    // this.test1.activate=true;
    this.test1.diag_save(this.lname,this.email,this.pass,this.owner,this.address,this.rating,this.cont)
    .subscribe((res)=>{
    })
    this.router.navigate(['/login2']);
  }
}
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Test11Service } from '../test11.service';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
arr:any=[];
arr2:any=[];
arr3:any=[];
  constructor(public test1:Test11Service) {
    this.test1.client_find(this.test1.get_email()).subscribe((res)=>{
      console.log(res);
      this.arr=res;
      
  for(let i=0;i<res['length'];i++){
    // this.arr.push(res[i]);
    // console.log(this.arr);
      this.test1.client_find1(this.arr[i].Username).subscribe((res1)=>{
// console.log(res1);
this.arr2=res1;
      });
  }
    });
   }
 
  ngOnInit() {
  }

}

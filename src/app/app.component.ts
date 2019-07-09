import { Component } from '@angular/core';
import {Test11Service} from './test11.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  varflag=0;
  constructor(public tt:Test11Service){
    if(this.tt.get_email()){
    this.tt.activate=true;
    // this.tt.activate1=true;
    
    }
    else {
      this.tt.activate=false;
      // this.tt.activate1=false;
    
    }
  }
  // ngDoCheck(){
  //   if(this.tt.get_email()){
  //     this.varflag=1;
  //     }
  //       else {
  //     this.varflag=0;
  //   }
  // }
  // title = 'user';
}

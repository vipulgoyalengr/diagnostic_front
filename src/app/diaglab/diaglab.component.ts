import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diaglab',
  templateUrl: './diaglab.component.html',
  styleUrls: ['./diaglab.component.css']
})
export class DiaglabComponent implements OnInit {
  a;
  b;
  c;
  style1="none";
menu(){
  this.a="about";
  this.b="news"
this.c="Sign Out";
if(this.style1=="block"){
this.style1="none";
}
else{
  this.style1="block"
}
}
  constructor() { }

  ngOnInit() {
  }

}

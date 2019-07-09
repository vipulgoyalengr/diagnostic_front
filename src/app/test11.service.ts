import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class Test11Service {
activate=false;
activate1=true;

  url="http://localhost:2001/";
  constructor(public http:HttpClient) { }
patient_save(finame,laname,age,email,pass,gend,fname,add,dob,cont,state){
return this.http.post(this.url+"reg",
{"Firstname":finame,"Lastname":laname,"Age":age,"Email":email,"Password":pass,"Gender":gend,"Fathername":fname,"Address":add,"Dob":dob,"Contact":cont,"State":state});
}
diag_save(lname,email,pass,owner,address,rating,cont){
  return this.http.post(this.url+"dreg",
  {"Lab_name":lname,"Lab_usr":email,"Lab_pass":pass,"Owner":owner,"Address":address,"Rating":rating,"Contact":cont})
}
patient_find(a,b){
  return this.http.post(this.url+"find",{"Email":a,"Password":b});
}
diag_find(a,b){
  return this.http.post(this.url+"find2",{"Lab_usr":a,"Lab_pass":b});
}
patient_booking(usr,dte,labusr,lab,add){
  console.log(dte);
return this.http.post(this.url+"book",{"Username":usr,"Date":dte,"Lab_usr":labusr,"Lab":lab,"Address":add});
}
set_email(usr){
  localStorage.setItem('Email',usr);

  // console.log(localStorage.getItem('Email'));
}
get_email(){
  // console.log(localStorage.getItem('Email'));
  return localStorage.getItem('Email');
};
set_item(a){
  localStorage.setItem('loginas',a);
}
get_item(){
  return localStorage.getItem('loginas');
}
logout(){
  return localStorage.removeItem('Email');
 
}
patient_app(x){
  return this.http.post(this.url+"appoint",
  {"Username":x});
}
lab(){
  return this.http.get(this.url+"lab");
}
client_find(y){
return this.http.post(this.url+"cli",
{"Lab_usr":y});
}
client_find1(z){
  return this.http.post(this.url+"cli1",
  {"Email":z});
  }
}

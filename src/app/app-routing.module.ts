import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegPageComponent} from './reg-page/reg-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {BlankComponent} from './blank/blank.component';
import {NavbarComponent} from  './navbar/navbar.component';
import {AppComponent} from './app.component';
import {AppointmentComponent} from './appointment/appointment.component';
import {LogregComponent} from './logreg/logreg.component';
import {AuthserviceService} from './authservice.service';
import {DiaglabComponent} from './diaglab/diaglab.component';
import {ClientsComponent} from './clients/clients.component';
import {BookingsComponent} from './bookings/bookings.component';
import {UpreportsComponent} from './upreports/upreports.component';
import {LoginPage2Component} from './login-page2/login-page2.component';
const route:Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',canActivate:[AuthserviceService],component:LoginPageComponent}, 
  {path:'home',component:HomePageComponent},
  {path:'reg',component:RegPageComponent},  
  {path:'but',component: BlankComponent},
  // {path:'nav',component:NavbarComponent},
  // {path:'ap',component:AppComponent},
  {path:'logreg',component: LogregComponent},
  {path:'app',component: AppointmentComponent},
  {path:'urep',component: UpreportsComponent},
  {path:'book',component: BookingsComponent},
{path:'client',component:ClientsComponent},
{path:'dialab',component:DiaglabComponent},
{path:'login2',component:LoginPage2Component}

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      route
      )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

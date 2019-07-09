import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegPageComponent } from './reg-page/reg-page.component';
import { BlankComponent } from './blank/blank.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppointmentComponent } from './appointment/appointment.component';
import { LogregComponent } from './logreg/logreg.component'
import { ToastrModule } from 'ng6-toastr-notifications';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DiaglabComponent } from './diaglab/diaglab.component';
import { ClientsComponent } from './clients/clients.component';
import { BookingsComponent } from './bookings/bookings.component';
import { UpreportsComponent } from './upreports/upreports.component';
import { LoginPage2Component } from './login-page2/login-page2.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegPageComponent,
    BlankComponent,
    NavbarComponent,
    AppointmentComponent,
    LogregComponent,
    DiaglabComponent,
    ClientsComponent,
    BookingsComponent,
    UpreportsComponent,
    LoginPage2Component
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

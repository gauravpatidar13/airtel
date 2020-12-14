import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { RechargeNPayBillsComponent } from './recharge-n-pay-bills/recharge-n-pay-bills.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { PortToAirtelComponent } from './port-to-airtel/port-to-airtel.component';
import { AirtelXStreamComponent } from './airtel-x-stream/airtel-x-stream.component';
import { TalkComponent } from './talk/talk.component';
import { WyncMusicComponent } from './wync-music/wync-music.component';
import { Header1Component } from './header1/header1.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LoginSliderComponent } from './login-slider/login-slider.component';
import { PrepaidRechargeComponent } from './prepaid-recharge/prepaid-recharge.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    RechargeNPayBillsComponent,
    OurServicesComponent,
    PostpaidComponent,
    PortToAirtelComponent,
    AirtelXStreamComponent,
    TalkComponent,
    WyncMusicComponent,
    Header1Component,
    LoginComponent,
    HomeComponent,
    LoginSliderComponent,
    PrepaidRechargeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

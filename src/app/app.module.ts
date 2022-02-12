import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { CustomerformModule } from './customerform/customerform.module';
import { ReservationformModule } from './reservationform/reservationform.module';
import { RoomtypeModule } from './roomtype/roomtype.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    
   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    CustomerformModule,
    ReservationformModule,
    RoomtypeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

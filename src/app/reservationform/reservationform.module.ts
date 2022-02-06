import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationformComponent } from './reservationform.component';
import { ReservationRoutingModule } from './reservation-routing/reservation-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ReservationformComponent],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    FormsModule
  ],
  exports: [
    ReservationformComponent
  ]
})
export class ReservationformModule { }

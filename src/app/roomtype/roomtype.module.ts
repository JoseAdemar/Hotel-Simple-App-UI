import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomtypeRoutingModule } from './roomtype-routing/roomtype-routing.module';
import { FormsModule } from '@angular/forms';
import { RoomtypeComponent } from './roomtype.component';



@NgModule({
  declarations: [RoomtypeComponent],
  imports: [
    CommonModule,
    RoomtypeRoutingModule,
    FormsModule
  ], exports: [
     RoomtypeComponent
  ]
})
export class RoomtypeModule { }

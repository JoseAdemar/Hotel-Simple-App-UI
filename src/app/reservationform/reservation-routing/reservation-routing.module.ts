import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ReservationformComponent } from '../reservationform.component';

const routes: Routes = [
  {path: 'reservationform', component: ReservationformComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }

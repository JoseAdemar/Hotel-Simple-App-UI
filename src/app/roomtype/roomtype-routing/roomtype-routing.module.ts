import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomtypeComponent } from '../roomtype.component';

const routes: Routes = [
   {path: 'roomtype', component: RoomtypeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomtypeRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { CustomerformComponent } from '../customerform.component';

const routes: Routes = [
  {path: 'customerform', component: CustomerformComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

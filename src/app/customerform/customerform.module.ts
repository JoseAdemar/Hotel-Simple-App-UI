import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerformComponent } from './customerform.component';
import { FormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './customer-routing/customer-routing.module';



@NgModule({
  declarations: [CustomerformComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule
    
  ],
  exports: [
    CustomerformComponent
  ]
})
export class CustomerformModule { }

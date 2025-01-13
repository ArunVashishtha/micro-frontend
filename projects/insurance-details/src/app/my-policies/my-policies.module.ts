import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPoliciesComponent } from './my-policies.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MyPoliciesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: MyPoliciesComponent
    }])
  ]
})
export class MyPoliciesModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPoliciesComponent } from './my-policies/my-policies.component';

const routes: Routes = [
  { path: '', redirectTo: '/my-policies', pathMatch: 'full'},
  { path: 'my-policies', component: MyPoliciesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

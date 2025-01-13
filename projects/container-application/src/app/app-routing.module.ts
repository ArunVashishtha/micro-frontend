import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { environment } from '../environments/environment';

const routes: Routes = [
  {
    path: 'insurance/:policyNumber', loadChildren: () => {
      return loadRemoteModule({
        remoteName: 'insuranceDetails',
        remoteEntry: `${environment.insuranceDetailMFE}/remoteEntry.js`,
        exposedModule: './MyPoliciesModule'
      }).then(m => m.MyPoliciesModule).catch(err => console.log(err))
    }
  },
  {
    path: 'payment',
    loadChildren: () => {
      return loadRemoteModule({
        remoteName: 'premiumPayment',
        remoteEntry: `${environment.premiumPaymentMFE}/remoteEntry.js`,
        exposedModule: './AppModule'
      }).then(m => m.AppModule).catch(err => console.log(err))
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const ComponentArray = [];

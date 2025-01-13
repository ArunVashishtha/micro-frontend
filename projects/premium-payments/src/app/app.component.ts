import { Component } from '@angular/core';
import { Router } from '@angular/router';

type PolicyDetail = {
  policyType: string;
  sumInsured: number;
  policyStartDate: string;
  policyEndDate: string;
  policyHolder: string;
  insurer: string;
  policyNumber: string;
  policyHolderName: string;
  premiumAmount: number;
  premiumDueDate:string;            
  coverageDetails: {
    hospitalizationCover: string;    
    dayCareTreatment: string;        
    preExistingDiseases: string;     
    maternityCover: string;          
    ambulanceCharges: string;        
    criticalIllnessCover: string;    
  };
  policyStatus: string;              
  paymentFrequency: string;          
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'premium-payments';
  policyDetail: PolicyDetail | null = null;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    let data = sessionStorage.getItem('policyDetail');
    try {
      if (data) {
        this.policyDetail = JSON.parse(data);
        sessionStorage.removeItem('policyDetail');
      }
    } catch (error) {
      
    }
  }

  onRenew() {
    this.router.navigateByUrl('/');
  }
}

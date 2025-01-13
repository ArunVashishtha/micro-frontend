import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  selector: 'app-my-policies',
  templateUrl: './my-policies.component.html',
  styleUrls: ['./my-policies.component.scss'],
})
export class MyPoliciesComponent {
  policyNumber: string | null = null;
  policyDetails: PolicyDetail | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.policyNumber = this.route.snapshot.paramMap.get('policyNumber');
    if (this.policyNumber) {
      try {
        const policies: PolicyDetail[] =
          JSON.parse(localStorage.getItem('policies-details') as string) || [];
        this.policyDetails =
          policies.find(
            (policy) => policy.policyNumber === this.policyNumber
          ) || null;
        if (this.policyDetails) {
          console.log('Policy Details Found', this.policyDetails);
        } else {
          console.log('Policy Details Not Found');
        }
      } catch (error) {
        console.log('Invalid Policy Number');
      }
    } else {
      console.log('Invalid Policy Number');
    }
  }

  proceedToRenew() {
    sessionStorage.setItem('policyDetail', JSON.stringify(this.policyDetails));
    this.router.navigate(['payment']);
  }
}

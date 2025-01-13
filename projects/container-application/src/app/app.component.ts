import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'container-application';
  
  constructor(
    private router: Router
  ) {
    localStorage.setItem(
      'policies-details',
      JSON.stringify([
        {
          "policyType": "Health insurance",
          "sumInsured": 2500000,
          "policyStartDate": "01 Jan 2025",
          "policyEndDate": "31 Dec 2025",
          "policyHolder": "Individual",
          "insurer": "Max Life Insurance Company Ltd.",
          "policyHolderName": "Arun Vashishtha",
          "policyNumber": "MAX1234565",
          "premiumAmount": 30000,
          "coverageDetails": {
            "hospitalizationCover": "Yes",
            "dayCareTreatment": "Yes",
            "preExistingDiseases": "Covered after 2 years",
            "maternityCover": "No",
            "ambulanceCharges": "Covered",
            "criticalIllnessCover": "Yes"
          },
          "policyStatus": "Active",
          "paymentFrequency": "Annually"
        }
      ])      
    );
  }

  onInsuranceDetailLinkClick() {
    this.router.navigate(['/insurance', 'MAX1234565'])
  }
}

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
  result: number = 0;
  worker: Worker | undefined;
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
    // Check if the environment supports Web Workers
    if (typeof Worker !== 'undefined') {
      // Dynamically import the worker script
      this.worker = new Worker(new URL('./worker.worker', import.meta.url), { type: 'module' });

      // Post a message to the worker
      this.worker.postMessage('start');

      // Listen for messages from the worker
      this.worker.onmessage = ({ data }) => {
        this.result = data;
        console.log('Result from worker:', data);
      };

      // Handle worker errors
      this.worker.onerror = (error) => {
        console.error('Worker Error: ', error);
      };
    } else {
      console.log('Web Workers are not supported in this environment.');
    }
  }

  onRenew() {
    this.router.navigateByUrl('/');
  }
  ngOnDestroy() {
    if (this.worker) {
      this.worker.terminate(); // Clean up the worker when the component is destroyed
    }
  }
}

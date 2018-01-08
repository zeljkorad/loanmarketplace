import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-loanrequests',
  templateUrl: './loanrequests.component.html'
})
export class LoanrequestsComponent implements OnInit {

  title = 'Loan Requests';

  collection = [];

  constructor() {
    for (let i = 1; i <= 100; i++) {
      this.collection.push('item ${i}');
    }
  }

  ngOnInit() {
  }

}

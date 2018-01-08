import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-attorneys',
  templateUrl: './attorneys.component.html'
})
export class AttorneysComponent implements OnInit {

  title = 'Attorneys';

  constructor() { }

  ngOnInit() {
  }

}

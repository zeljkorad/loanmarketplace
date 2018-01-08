import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class NotfoundComponent implements OnInit {

  title = 'Not Found';

  constructor() { }

  ngOnInit() {
  }

}

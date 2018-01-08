import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html'
})
export class ResourcesComponent implements OnInit {

  title = 'In the News';

  constructor() { }

  ngOnInit() {
  }

}

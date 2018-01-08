import { Component } from '@angular/core';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
isShrunk: boolean = false;

constructor(zone: NgZone) {
  window.onscroll = () => {
   zone.run(() => {
     if(window.pageYOffset > 0) {
        this.isShrunk = true;
     } else {
        this.isShrunk = false;
     }
   });
 }
}
}

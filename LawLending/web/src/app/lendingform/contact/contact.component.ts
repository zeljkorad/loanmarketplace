import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
private contactYes: boolean;

  constructor() { }

  ngOnInit() {
  }

  protected goNext() {
    if(this.contactYes) {

    } else{

    }
  }
}

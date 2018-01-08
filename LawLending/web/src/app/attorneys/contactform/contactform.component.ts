import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html'
})
export class ContactformComponent implements OnInit {
  contactForm : FormGroup;

  constructor(public fb: FormBuilder) {

  }

 ngOnInit() {
 this.contactForm = this.fb.group({
   "firstname": ['', [Validators.required]],
   "lastname": ['', [Validators.required]],
   "messagetext": ['', [Validators.required]]
 })
 }

  submitForm(value: any):void {
    console.log('Reactive Form Data: ')
    console.log(value);
  }
}

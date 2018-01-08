import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html'
})
export class NewsletterComponent implements OnInit {

  newsletterForm : FormGroup;

  constructor(public fb: FormBuilder) {

  }

 ngOnInit() {
 this.newsletterForm = this.fb.group({
   "newsletteremail": ['', [Validators.required]]
 })
 }

  submitForm(value: any):void {
    console.log('Reactive Form Data: ')
    console.log(value);
  }

}

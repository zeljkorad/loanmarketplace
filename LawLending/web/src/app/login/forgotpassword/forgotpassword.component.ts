import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html'
})
export class ForgotpasswordComponent implements OnInit {
  fpForm : FormGroup;

  constructor(public fb: FormBuilder) {

  }

 ngOnInit() {
 this.fpForm = this.fb.group({
   "fpemail": ['', [Validators.required]]
 })
 }

  submitForm(value: any):void {
    console.log('Reactive Form Data: ')
    console.log(value);
  }
}

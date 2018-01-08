import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;

  constructor(public fb: FormBuilder) {

  }

 ngOnInit() {
 this.loginForm = this.fb.group({
   "loginemail": ['', [Validators.required]],
   "loginpassword": ['', [Validators.required]]
 })
 }

  submitForm(value: any):void {
    console.log('Reactive Form Data: ')
    console.log(value);
  }
}

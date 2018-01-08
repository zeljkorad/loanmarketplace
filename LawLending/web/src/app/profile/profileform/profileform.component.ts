import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profileform',
  templateUrl: './profileform.component.html'
})
export class ProfileformComponent implements OnInit {
  profileForm : FormGroup;

  constructor(public fb: FormBuilder) {

  }

 ngOnInit() {
 this.profileForm = this.fb.group({
   "firstname": ['', [Validators.required]],
   "lastname": ['', [Validators.required]],
   "profileemail": ['', [Validators.required]],
   "password": ['', [Validators.required]],
   "confirm_password": ['', [Validators.required]]
 })
 }

  submitForm(value: any):void {
    console.log('Reactive Form Data: ')
    console.log(value);
  }
}

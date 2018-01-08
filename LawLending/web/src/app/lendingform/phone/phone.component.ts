import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html'
})
export class PhoneComponent implements OnInit {
  modalForm : FormGroup;

  constructor(public fb: FormBuilder) {

  }

 ngOnInit() {
 this.modalForm = this.fb.group({
   "phone": ['', [Validators.required]]
 })
 }

  submitForm(value: any):void {
    console.log('Reactive Form Data: ')
    console.log(value);
  }
}

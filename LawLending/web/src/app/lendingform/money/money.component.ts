import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html'
})
export class MoneyComponent implements OnInit {
  modalForm : FormGroup;

  constructor(public fb: FormBuilder) {

  }

 ngOnInit() {
 this.modalForm = this.fb.group({
   "money": ['', [Validators.required]]
 })
 }

  submitForm(value: any):void {
    console.log('Reactive Form Data: ')
    console.log(value);
  }
}

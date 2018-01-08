import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-yourname',
  templateUrl: './yourname.component.html'
})
export class YournameComponent implements OnInit {
  modalForm : FormGroup;

  constructor(public fb: FormBuilder) {

  }

 ngOnInit() {
 this.modalForm = this.fb.group({
   "firstname": ['', [Validators.required]],
   "lastname": ['', [Validators.required]]
 })
 }

  submitForm(value: any):void {
    console.log('Reactive Form Data: ')
    console.log(value);
  }
}

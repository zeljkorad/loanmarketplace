import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-accidenttime',
  templateUrl: './accidenttime.component.html'
})
export class AccidenttimeComponent implements OnInit {
  modalForm : FormGroup;

  constructor(public fb: FormBuilder) {

  }

 ngOnInit() {
 this.modalForm = this.fb.group({
   "accidenttime": ['', [Validators.required]]
 })
 }

  submitForm(value: any):void {
    console.log('Reactive Form Data: ')
    console.log(value);
  }
}

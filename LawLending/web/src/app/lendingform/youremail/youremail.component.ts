import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-youremail',
  templateUrl: './youremail.component.html'
})
export class YouremailComponent implements OnInit {
  modalForm : FormGroup;

  constructor(public fb: FormBuilder) {

  }

 ngOnInit() {
 this.modalForm = this.fb.group({
   "youremail": ['', [Validators.required]]
 })
 }

  submitForm(value: any):void {
    console.log('Reactive Form Data: ')
    console.log(value);
  }
}

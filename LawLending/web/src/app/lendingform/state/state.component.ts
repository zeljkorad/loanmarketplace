import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var google: any;

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html'
})
export class StateComponent implements OnInit {
  @ViewChild('ref') search: ElementRef;

  loadGoogle() {
        let _this: any = this;

        let autocomplete = new google.maps.places.Autocomplete((this.search.nativeElement), {types: ['(regions)'], componentRestrictions: {country: "us"}});


        //add event listener to google autocomplete and capture address input
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            _this.location = autocomplete.getPlace();
        });

  }

  modalForm: FormGroup;

  constructor(public fb: FormBuilder) {

  }

  ngOnInit() {
    this.modalForm = this.fb.group({
      "state": ['', [Validators.required]]
    })
    setTimeout(() => {
      this.loadGoogle()
    }, 3000)
 }

  submitForm(value: any):void {
    console.log('Reactive Form Data: ')
    console.log(value);
  }
}

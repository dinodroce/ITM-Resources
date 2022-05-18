import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-date',
  templateUrl: './form-date.component.html',
  styleUrls: ['./form-date.component.scss']
})
export class FormDateComponent implements OnInit {

  @Input() form!: FormGroup;
  @Input() minDate: any;
  @Input() maxDate: any;
  

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  myForm: FormGroup
  emails: FormArray

  constructor(
    private _fb: FormBuilder,
    private _snakBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.myForm = this._fb.group({
      name: '',
      emails: this._fb.array([ this.createEmail() ])
    })
  }

  createEmail():FormGroup {
    return this._fb.group({
      email: ''
    })
  }

  addEmailItem():void {
    this.emails = this.myForm.get('emails') as FormArray
    this.emails.push( this.createEmail() )
  }

  removeEmailItem(index):void {
    this.emails = this.myForm.get('emails') as FormArray
    this.emails.removeAt(index)
  }

  save() {
    console.log(this.myForm.value)
    this._snakBar.open('Salvo com sucesso !', '', {duration: 2000})
  }
}

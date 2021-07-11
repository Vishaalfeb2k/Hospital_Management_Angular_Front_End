import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
isLinear = false;
  firstFormGroup: FormGroup=new FormGroup({});
  secondFormGroup: FormGroup=new FormGroup({});
  thirdFormGroup: FormGroup=new FormGroup({});
  fourthFormGroup: FormGroup=new FormGroup({});
  fifthFormGroup: FormGroup=new FormGroup({});
  sixthFormGroup: FormGroup=new FormGroup({});
  seventhFormGroup: FormGroup=new FormGroup({});
  eighthFormGroup: FormGroup=new FormGroup({});
  
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
     this.sixthFormGroup = this._formBuilder.group({
      sixthCtrl: ['', Validators.required]
    });
    this.seventhFormGroup = this._formBuilder.group({
      seventhCtrl: ['', Validators.required]
    });
    this.eighthFormGroup = this._formBuilder.group({
      eighthCtrl: ['', Validators.required]
    });
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}

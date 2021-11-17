import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from 'src/app/my.validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  errorMessages: any = {
    emailMessage: '',
    passwordMessage: '',
    nameMessage: '',
    surnameMessage: '',
  };

  constructor() { 
    this.form = new FormGroup({
     name: new FormControl('', [Validators.required]),
     surname: new FormControl('', [Validators.required]),
     email: new FormControl('', [Validators.required, Validators.email]),
     password: new FormControl('', [Validators.required, Validators.minLength(6)]),
     confirmPassword: new FormControl('', [Validators.required, MyValidators.toCheckedPassword])

    })
  }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.form);
    
  }

}

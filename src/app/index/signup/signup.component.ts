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
    confPassMessage: '',
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
    this.checkSignUpFormValidation()
  }

  submit(){
    // console.log(this.form);
    
  }
  
  checkSignUpFormValidation(){
    this.form.valueChanges.subscribe(()=>{
      console.log(this.form.get('name')?.value)
      if(this.form.get('name')?.invalid){
        this.errorMessages.nameMessage = this.handleNameErrors()
        // console.log(this.errorMessages.nameMessage);
        
      }

      if(this.form.get('surname')?.invalid){
        debugger
        this.errorMessages.surnameMessage = this.handleSurNameErrors()
      }

      if(this.form.get('email')?.invalid){
        this.errorMessages.emailMessage = this.handleEmailErrors()
      }

      if(this.form.get('password')?.invalid){
        this.errorMessages.passwordMessage = this.handlePasswordErrors()
      }
      
      if(this.form.get('confirmPassword')?.invalid){
        this.errorMessages.confirmPassword = this. handleConfPassErrors()
      }

    })
  }

  handleNameErrors(): string | void {
    if (this.form.get('email')?.errors?.required) {
      return 'name field cannot be empty '
    }
  }

  handleSurNameErrors(): string | void{
    if (this.form.get('surname')?.errors?.required) {
      return 'surname field cannot be empty '
    }
  }

  handleEmailErrors(): string | void{
    if (this.form.get('email')?.errors?.required) {
      return 'email field cannot be empty '
    }
  }
  
  handlePasswordErrors(): string | void{
    if (this.form.get('password')?.errors?.required) {
      return 'password field cannot be empty '
    }
    if (this.form.get('password')?.errors?.minLength) {
      return `the length must be at least ${this.form.get('password')?.errors?.minlength?.requiredLength}.
              now the number of simvols ${this.form.get('password')?.errors?.minlength?.actualLength}`
    }
  }

  handleConfPassErrors(): string | void {
    if (this.form.get('confirmPassword')?.errors?.required) {
      return 'confirmPassword field cannot be empty '
    }
    if(this.form.get('confirmPassword')?.errors?.toCheckedPassword) {
      return 'wrong password : enter correct password'
    }
  }

}

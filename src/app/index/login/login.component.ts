import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  errorMessages: any = {
    loginMessage: '',
    passwordMessage: ''
  };

  constructor() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  ngOnInit() {
    this.checkFormValidation();
  }

  checkFormValidation() {
    this.form.valueChanges.subscribe((val) => {
      if (this.form.get('email')?.invalid) {
        this.errorMessages.loginMessage = this.handleEmailErrors();
      }
      if (this.form.get('password')?.invalid) {
        this.errorMessages.passwordMessage = this.handlePasswordErrors();
      }
    })
  }

  submit() {
    console.log('form', this.form);
    const formData = { ...this.form.value };
    console.log(formData);
  }

  handleEmailErrors(): string | void {
    if (this.form.get('email')?.errors?.required) {
      return 'email field cannot be empty '
    }
    if (this.form.get('email')?.errors?.email) {
      return 'invalid email address'
    }
  }

  handlePasswordErrors(): string | void {
    if (this.form.get('password')?.errors?.minlength) {
      return `the length must be at least ${this.form.get('password')?.errors?.minlength?.requiredLength}.
              now the number of simvols ${this.form.get('password')?.errors?.minlength?.actualLength}`
    }
    if (this.form.get('password')?.errors?.required) {
      return 'password field cannot be empty'
    }
  }
}

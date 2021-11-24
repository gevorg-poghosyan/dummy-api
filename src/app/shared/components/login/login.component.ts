import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  form: FormGroup;
  errorMessages: any = {
    loginMessage: '',
    passwordMessage: ''
  };

  constructor(private authService: AuthenticationService,
    private router: Router) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }
  

  ngOnInit() {
    this.checkFormValidation();
  }

  checkFormValidation() {
    this.subscription = this.form.valueChanges.subscribe((val) => {
      if (this.form.get('email')?.invalid) {
        this.errorMessages.loginMessage = this.handleEmailErrors();
      }
      if (this.form.get('password')?.invalid) {
        this.errorMessages.passwordMessage = this.handlePasswordErrors();
      }
    })
  }

  submit() {
    this.authService.SignIn(this.form.value.email, this.form.value.password)
    .then((result) => {
      this.router.navigate(['home']);
      console.log((result));
      
   }).catch((error) => {
     window.alert(error.message);
     this.router.navigate(['signup']);
   })
  }

  signOut() {
    this.authService.SignOut()
    .then((result) => {
      this.router.navigate(['']);
      console.log((result));
      
   }).catch((error) => {
     window.alert(error.message);
     this.router.navigate(['']);
   })
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

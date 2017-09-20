import { AuthService } from './../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errors = {
    passwordError: ''
  };

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'passwordConfirm': new FormControl(null, Validators.required)
    })
  }

  onSignup() {
    if (this.signupForm.value.password !== this.signupForm.value.passwordConfirm) {
      return this.errors.passwordError = "Password Do Not Match";
    }
    if (this.signupForm.value.passwordConfirm.length < 6) {
      return this.errors.passwordError = "Password must be at least 6 character long";
    }
    const { email, password } = this.signupForm.value;
    const signup = this.authService.signupUser(email, password);
    signup.catch(
      (error) => {
        this.errors.passwordError = "Email is already in use"
        return error;
      }
    )
  }

}

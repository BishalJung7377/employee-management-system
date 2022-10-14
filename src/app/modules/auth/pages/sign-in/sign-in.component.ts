import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public loginForm!: FormGroup;
  public loginAuthResp: any;
  public hide : boolean = true;
  public emailLabel : string = 'Email Address';
  public passwordLabel : string = 'Password';
  public signinLabel : string = "Sign in with";
  public remembermeLabel : string = "Remember me";
  public emailerrorMsg : string = 'Email is required*';
  public passworderrorMsg : string = 'Password is required*';
  public forgetPassword : string = 'Forgot Password?';
  public notRegister : string = "Don't have an account?";
  public register : string = 'Register';
  public email!: string;
  public password!: string;
  public submitted : boolean = false;
  public valid : boolean = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initialize();
  }
  // validating forms function
  initialize(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  // login data submit
  onSubmit(): void {

  }

  get loginFormcontroller() {
    return this.loginForm.controls;
  }
}

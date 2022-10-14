import { newUsers } from './../../../../core/models/user.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Injector } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import {
  passwordUppercase,
  specialeChars,
  numericPass,
  validateConfirmpassword,
} from '../../../../shared/validators/validate';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public signupForm!: FormGroup;
  public authResponse: any;
  public hide : boolean = true;
  public usernameLabel : string = 'User Name';
  public phonenumberLabel : string = 'Phone number'
  public emailLabel : string = 'Email';
  public passwordLabel : string = 'Password';
  public confirmpasswordLabel : string = 'Confirm Password';
  public signupLabel : string = "Sign Up Here";
  public remembermeLabel : string = "Remember me";
  public emailerrorMsg : string = 'Email is required*';
  public usernameerrorMsg : string = 'Username is required*';
  public phoneerrorMsg : string = 'Phone number is required*';
  public passworderrorMsg : string = 'Password is required*';
  public forgetPassword : string = 'Forgot Password?';
  public alreadyAccount : string = "Already have a account?";
  public login : string = 'Login';
  public email!: string;
  public newPassword!: string;
  public confirmPassword!: string;
  public submitted : boolean = false;
  public valid : boolean = false;
  public hidenewPassword : boolean = true;
  public hidePassword : boolean = true;
  
  constructor(
    public authentication: AuthService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.initialize();
  }

  initialize(): void {
    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      phonenumber: ['', [Validators.required, Validators.minLength(10)]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
        newpassword: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            passwordUppercase(),
            specialeChars(),
            numericPass(),
          ],
        ],
        cpassword: ['', [Validators.required]],
    },
    { validators: validateConfirmpassword() }
    );
  }

  onSubmit(): void {
   
    if(this.signupForm.valid){
      this.authentication.signup(this.signupForm.value).subscribe(
        (response) =>{
          alert("User Created")
        }
      )
    }
  else{
    alert("Invalid Form")
  }
  }

  get signupFormcontroller() {
    return this.signupForm.controls;
  }

  get newPasswords() {
    return this.signupForm.get('newpassword');
  }

  get confirmPasswords() {
    return this.signupForm.get('cpassword');
  }

  numberOnly(event: { key: string }): boolean {
    let pattern = /^([0-9])$/;
    let result = pattern.test(event.key);
    return result;
  }

  textOnly(event: { key: string }): boolean {
    let textPattern =/^[A-Za-z\s]*$/;
    let res = textPattern.test(event.key);
    return res;
  }
}

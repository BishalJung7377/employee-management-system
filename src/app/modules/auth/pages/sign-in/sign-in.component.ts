import { Component, OnInit, Injector } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public loginForm!: FormGroup;
  public authResponse: any;
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
    public loginAuthentication: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private injector: Injector
  ) {}

  ngOnInit(): void {
    this.initialize();
  }

  initialize(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          // Validators.email,
          // Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(): void {
    console.log('Clicked')
   this.loginAuthentication.login().subscribe(
      (response) =>{
        this.authResponse = response;
        const email = this.loginForm.get('email')?.value;
        const cpassword = this.loginForm.get('password')?.value;
        const user = response.find(
          (userCredentials:any)=>{
            return userCredentials.email ==  email && userCredentials.cpassword == cpassword
          })
      if(user){
        alert('welcome to dashboard user');
        this.loginForm.reset();
      }
      else{
        alert("User not found")
      }
      }
    )
  }

  get loginFormcontroller() {
    return this.loginForm.controls;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;
  isSubmitted = false;
  returnUrl = '';
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    //loginForm.controls.email
    //or fc.email

    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;     //?returnUrl=/checkout
  }

  get formControl(){      //as for better property
    return this.loginForm.controls
  }

  submit(){
    this.isSubmitted = true;
    if(this.loginForm.invalid) return;

    // alert(`email: ${this.formControl.email.value},
    //   password: ${this.formControl.password.value}`)

    this.userService.login({
      email: this.formControl.email.value,
      password: this.formControl.password.value
    }).subscribe(() => {
      this.router.navigateByUrl(this.returnUrl);
    });
  }

}

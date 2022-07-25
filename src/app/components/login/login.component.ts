import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'cf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formValid = false;
  credentialsInvalid = false;

  constructor() {}

  ngOnInit() {}

  onSubmit(signInForm: NgForm) {
    console.log(signInForm.value);

    if (!signInForm.valid) {
      this.formValid = true;
      this.credentialsInvalid = false;
      return;
    }

  }

}

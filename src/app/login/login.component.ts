import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
}

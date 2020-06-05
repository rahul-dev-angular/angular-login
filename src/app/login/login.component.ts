import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    alert(this.f.email.value);

    const parameter = {
      email: this.f.email.value,
      password: this.f.password.value
    }

    this.apiService.getLog(parameter).subscribe(data => {
      console.log(data);
    })
  }

}

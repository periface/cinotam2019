import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { AuthService } from '../shared/services/account/auth/auth.service';

@Component({
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  form: FormGroup;
  /**
   *
   */
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}
  getErrorMessage() {
    return this.form.controls.email.hasError('required')
      ? 'You must enter a value'
      : this.form.controls.email.hasError('email')
      ? 'Not a valid email'
      : '';
  }
  async login() {
    console.log(this.form.value);
    await this.authService.login(this.form.value);
  }
  ngOnInit(): void {
    this.authService.afAuth.user.subscribe(data => {
      console.log(data);
    });
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.email]]
    });
  }
}

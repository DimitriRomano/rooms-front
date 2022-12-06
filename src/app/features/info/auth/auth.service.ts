import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  checkPasswords = (group: { controls: { password: { value: any }; passwordConfirm: { value: any } } }) => {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.passwordConfirm.value;
    return pass === confirmPass ? null : { notSame: true };
  };

  signupForm = this.fb.group(
    {
      email: [''],
      password: [''],
      passwordConfirm: [''],
      firstName: [''],
      lastName: ['']
    },
    { validators: this.checkPasswords }
  );

  loginForm = this.fb.group({
    email: [''],
    password: ['']
  });

  storeToken = (token: string) => {
    localStorage.setItem('token', token);
  };

  clearForms = () => {
    this.signupForm.reset();
    this.loginForm.reset();
  };

  resetToken = () => {
    localStorage.removeItem('token');
  };

  constructor(private fb: FormBuilder) {}
}

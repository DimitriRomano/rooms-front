import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AuthCtrlService } from 'src/app/api/services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(private authService: AuthService, private authCtrlService: AuthCtrlService) {}

  ngOnInit(): void {}

  signupForm = this.authService.signupForm;

  hide = true;
  hideConfirm = true;

  onSubmit = () => {
    try {
      if (!this.signupForm.valid) {
        console.log(this.signupForm.value);
        return;
      }
      const { email, password, firstName, lastName } = this.signupForm.value as {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
      };

      this.authCtrlService
        .authCtrlSignup({
          body: {
            email,
            password,
            firstName,
            lastName,
            role: 'USER'
          }
        })
        .subscribe((res) => {
          if (res.token) {
            this.authService.storeToken(res.token);
            window.location.reload();
          } else {
            throw new Error('No token returned');
          }
        });
    } catch (error) {
      throw new Error('An error occurred while signing up: ' + error);
    }
  };
}

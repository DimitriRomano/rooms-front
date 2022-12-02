import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AuthCtrlService } from '../../../../api/services/auth-ctrl.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private authCtrlService: AuthCtrlService) {
    console.log('LoginComponent constructor');
  }

  ngOnInit(): void {}

  hide = true;

  loginForm = this.authService.loginForm;

  onSubmit = () => {
    try {
      if (!this.loginForm.valid) {
        console.log(this.loginForm.value);
        return;
      }
      const { email, password } = this.loginForm.value as { email: string; password: string };

      this.authCtrlService
        .authCtrlLogin({
          body: {
            email,
            password
          }
        })
        .subscribe((res) => {
          if (res.token) {
            this.authService.storeToken(res.token);
          } else {
            throw new Error('No token returned');
          }
        });
    } catch (error) {
      throw new Error('An error occurred while logging in: ' + error);
    }
  };
}

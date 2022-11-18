import { Component, Input, OnInit } from '@angular/core';
import { AuthCtrlService } from '../../../../api/services/auth-ctrl.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(private authService: AuthCtrlService) {}

  ngOnInit(): void {}

  @Input() storeToken!: (token: string) => void;

  username = '';
  password = '';
  passwordConfirm = '';
  email = '';
  firstName = '';
  lastName = '';

  signup = () => {
    this.authService
      .authCtrlSignup({ body: { email: this.email, password: this.password, role: 'USER' } })
      .subscribe((res) => {
        this.storeToken(res.token!);
      });
    this.storeToken('token');
  };
}

import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  constructor() {}

  isLogin = false;

  ngOnInit(): void {
    this.isLogin = localStorage.getItem('token') ? true : false;
  }

  onLogout = () => {
    localStorage.removeItem('token');
    this.isLogin = false;
  };
}

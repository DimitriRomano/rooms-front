import { Component, OnInit } from '@angular/core';
import { AuthModel } from '../../../../api/models/auth-model';
import { AuthCtrlService } from 'src/app/api/services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user?: AuthModel;

  constructor(private authCtrlService: AuthCtrlService) {}

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.authCtrlService.authCtrlAuthInfo().subscribe((user) => {
        this.user = user;
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthModel } from 'src/app/api/models';
import { AuthCtrlService } from 'src/app/api/services';

@Component({
  selector: 'app-layouts-info',
  templateUrl: './layouts-info.component.html',
  styleUrls: ['./layouts-info.component.scss']
})
export class LayoutsInfoComponent implements OnInit {
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

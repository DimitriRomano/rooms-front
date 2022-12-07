import { Component, OnInit } from '@angular/core';
import { AuthModel } from '../../../../api/models/auth-model';
import { AuthCtrlService } from 'src/app/api/services';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(
    public router:Router,
    private authCtrlService: AuthCtrlService,
    private authService: AuthService,
    private _snackBar: MatSnackBar
    ) {}

  user?: AuthModel;
  editUserForm = this.authService.editUserForm;
  updateS !: Subscription;

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.authCtrlService.authCtrlAuthInfo().subscribe((user) => {
        this.user = user;
      });
    }
  }

  printvalue() {
    console.log(this.editUserForm.value);

    const { firstName, lastName, image } = this.editUserForm.value as {
      firstName: string;
      lastName: string;
      image: string;
    };

    this.updateS = this.authCtrlService.authCtrlUpdate({
       body: { firstName, lastName, image } , id: this.user!.id
      }).subscribe((res) => {
        this.ngOnInit();
        this._snackBar.open('Profil mis à jour', 'X', {
          horizontalPosition: 'right',
          verticalPosition: 'bottom',
        });});
  }

  ngOnDelete() {
    this.updateS.unsubscribe();
  } 
    
}

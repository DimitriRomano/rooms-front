import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { AngularMaterialModule } from '../../../angular-material.module';
import { ProfileComponent } from './profile/profile.component';
import { ReservationModule } from '../../reservation/reservation.module';

@NgModule({
  declarations: [AuthComponent, LoginComponent, SignupComponent, ProfileComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule, AngularMaterialModule, ReservationModule],
  exports: [AuthComponent]
})
export class AuthModule {}

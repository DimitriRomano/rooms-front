import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { AngularMaterialModule } from '../../../angular-material.module';

@NgModule({
  declarations: [AuthComponent, LoginComponent, SignupComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule, AngularMaterialModule]
})
export class AuthModule {}

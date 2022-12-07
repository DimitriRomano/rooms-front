import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelInfoComponent } from '../../features/info/hotel-info/hotel-info.component';
import { AuthComponent } from '../../features/info/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'hotel/:id',
    component: HotelInfoComponent
  },
  {
    path: 'profile',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsInfoRoutingModule {}

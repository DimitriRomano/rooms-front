import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelInfoComponent } from '../../features/info/hotel-info/hotel-info.component';

const routes: Routes = [
  {
    path: 'hotel/:id',
    component: HotelInfoComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsInfoRoutingModule { }

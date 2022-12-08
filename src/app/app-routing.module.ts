import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from "./layouts/admin-panel/admin-panel.component";
import { AuthGuard } from "./core/services/auth.guard";

const routes: Routes = [
  { path: '', loadChildren: () => import('./layouts/layouts.module').then((m) => m.LayoutsModule), },
  { path: 'admin', component: AdminPanelComponent, canActivate: [AuthGuard] },
  { path: 'reservations', loadChildren: () => import('./features/reservation/reservation.module').then((m) => m.ReservationModule), },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

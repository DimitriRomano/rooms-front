import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from "./layouts/admin-panel/admin-panel.component";
import { AuthGuard } from "./core/services/auth.guard";

const routes: Routes = [
  { path: 'admin', component: AdminPanelComponent, canActivate: [AuthGuard]},
  { path: '', loadChildren: () => import('./layouts/layouts.module').then((m) => m.LayoutsModule), },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

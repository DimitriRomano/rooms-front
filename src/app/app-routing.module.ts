import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminPanelComponent} from "./layouts/admin-panel/admin-panel.component";

const routes: Routes = [
  {path: '', loadChildren: () => import('./layouts/layouts.module').then((m) => m.LayoutsModule),},
  {path: 'admin', component: AdminPanelComponent,}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

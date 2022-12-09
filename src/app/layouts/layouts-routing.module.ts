import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AuthGuard } from '../core/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts-info/layouts-info.module').then((m) => m.LayoutsInfoModule)
      },
        
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule {}

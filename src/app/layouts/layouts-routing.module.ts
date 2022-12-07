import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts-info/layouts-info.module').then((m) => m.LayoutsInfoModule)
      },
      // {
      //   path: 'admin',
      //   loadChildren: () => import('./layouts-admin/layouts-admin.module').then((m) => m.LayoutsAdminModule)
      // },
      ]


  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule {}

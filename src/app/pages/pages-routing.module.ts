import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ErrorComponent } from './404/error/error.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listado/:page',
        component: ListadoComponent,
      },
      {
        path: 'perfil/:id',
        component: PerfilComponent,
      },
      {
        path: 'error',
        component: ErrorComponent,
      },
      {
        path: '',
        redirectTo: 'listado/0',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'error',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'listado/0',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

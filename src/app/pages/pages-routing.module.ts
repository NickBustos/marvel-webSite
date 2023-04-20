import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { PerfilComponent } from './perfil/perfil.component';

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
        path: '**',
        redirectTo: 'listado/0',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

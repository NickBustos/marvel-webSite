import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listadoHeroes/listado.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ErrorComponent } from './404/error/error.component';
import { ListadoComicsComponent } from './listado-comics/listado-comics.component';
import { PerfilComicComponent } from './perfil-comic/perfil-comic.component';

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
        path: 'perfil-comic/:id',
        component: PerfilComicComponent,
      },
      {
        path: 'comics/:page',
        component: ListadoComicsComponent,
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

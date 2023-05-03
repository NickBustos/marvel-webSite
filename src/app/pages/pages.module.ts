import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ListadoComponent } from './listadoHeroes/listado.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { ValidarDescPipe } from '../pipes/validar-desc.pipe';
import { ErrorComponent } from './404/error/error.component';
import { ListadoComicsComponent } from './listado-comics/listado-comics.component';
import { PerfilComicComponent } from './perfil-comic/perfil-comic.component';
import { ValidarAutores } from '../pipes/validar-autores.pipe';
import { SeriesComponent } from './series/series.component';

@NgModule({
  declarations: [
    ListadoComponent,
    PerfilComponent,
    ValidarAutores,
    ValidarDescPipe,
    ErrorComponent,
    ListadoComicsComponent,
    PerfilComicComponent,
    SeriesComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, NgMaterialModule],
})
export class PagesModule {}

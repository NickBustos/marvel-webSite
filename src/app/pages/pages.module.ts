import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { ValidarDescPipe } from '../pipes/validar-desc.pipe';
import { ErrorComponent } from './404/error/error.component';

@NgModule({
  declarations: [ListadoComponent, PerfilComponent, ValidarDescPipe, ErrorComponent],
  imports: [CommonModule, PagesRoutingModule, NgMaterialModule],
})
export class PagesModule {}

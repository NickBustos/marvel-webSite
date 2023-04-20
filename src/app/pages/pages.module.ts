import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { ValidarDescPipe } from '../pipes/validar-desc.pipe';

@NgModule({
  declarations: [ListadoComponent, PerfilComponent, ValidarDescPipe],
  imports: [CommonModule, PagesRoutingModule, NgMaterialModule],
})
export class PagesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { LogoComponent } from './marvelLogo/logo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarComponent, LogoComponent],
  imports: [CommonModule, NgMaterialModule, RouterModule],
  exports: [SidebarComponent, LogoComponent],
})
export class SharedModule {}

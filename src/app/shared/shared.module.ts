import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, NgMaterialModule],
  exports: [SidebarComponent],
})
export class SharedModule {}

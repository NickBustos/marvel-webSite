import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './marvelLogo/logo.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [SidebarComponent, LogoComponent],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    NgMaterialModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [SidebarComponent, LogoComponent],
})
export class SharedModule {}

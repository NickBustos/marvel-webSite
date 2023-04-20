import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**ANGULAR MATERIAL*/
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
  ],
})
export class NgMaterialModule {}

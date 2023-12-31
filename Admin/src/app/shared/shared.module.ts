import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { RouterModule } from '@angular/router';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatTreeModule } from '@angular/material/tree';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  declarations: [
    // Client
    NavBarComponent,
    FooterComponent


  ],
  imports: [
    CommonModule,

    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTreeModule,
    MatFormFieldModule,
    MatTableModule,
    MatTreeModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  exports: [

    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTreeModule,
    MatFormFieldModule,
    MatTableModule,
    MatTreeModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatSortModule,

    // Client
    NavBarComponent,
    FooterComponent

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }

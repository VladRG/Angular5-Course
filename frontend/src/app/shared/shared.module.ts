import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule, MatButtonModule,
  MatInputModule, MatCardModule, MatTableModule, MatIconModule, MatPaginatorModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditableCellComponent, LoadingSpinnerComponent } from '@app/shared/components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    HttpClientModule,
    LoadingSpinnerComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    HttpClientModule,
    EditableCellComponent
  ],
  declarations: [
    EditableCellComponent,
    LoadingSpinnerComponent
  ]
})
export class AppSharedModule { }

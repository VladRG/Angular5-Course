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
import { CapitalizePipe } from '@app/shared/pipes';

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
    HttpClientModule
  ],
  declarations: [
    EditableCellComponent,
    LoadingSpinnerComponent,
    CapitalizePipe
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
    EditableCellComponent,
    LoadingSpinnerComponent,
    CapitalizePipe
  ]
})
export class AppSharedModule { }

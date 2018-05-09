import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatButtonModule, MatInputModule, MatCardModule, MatTableModule, MatIconModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditableCellComponent } from '@app/shared/components';

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
    MatIconModule,
    HttpClientModule
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
    HttpClientModule,
    EditableCellComponent
  ],
  declarations: [
    EditableCellComponent
  ]
})
export class AppSharedModule { }

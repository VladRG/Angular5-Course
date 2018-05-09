import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule, MatButtonModule,
  MatInputModule, MatCardModule, MatTableModule, MatIconModule, MatPaginatorModule, MatDialogModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditableCellComponent, LoadingSpinnerComponent } from '@app/shared/components';
import { CapitalizePipe } from '@app/shared/pipes';
import { ModalConfirmationComponent } from '@app/shared/components/modal-confirmation/modal-confirmation.component';

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
    MatDialogModule,
    HttpClientModule
  ],
  declarations: [
    EditableCellComponent,
    LoadingSpinnerComponent,
    CapitalizePipe,
    ModalConfirmationComponent
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
    MatDialogModule,
    HttpClientModule,
    EditableCellComponent,
    LoadingSpinnerComponent,
    CapitalizePipe
  ],
  entryComponents: [ModalConfirmationComponent]
})
export class AppSharedModule { }

import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './layout.component';
import { AppHeaderComponent } from './header/header.component';
import { AppFooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppLayoutComponent,
    AppHeaderComponent,
    AppFooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    // Services
  ],
  exports: [
    AppLayoutComponent
  ],
  entryComponents: []
})
export class AppLayoutModule { }

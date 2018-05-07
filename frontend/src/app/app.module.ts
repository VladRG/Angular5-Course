import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/layout.module';
import { AppLayoutComponent } from './layout/layout.component';
import { AppHeaderComponent } from './layout/header/header.component';
import { AppFooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    AppHeaderComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    AppLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppLayoutModule } from '@app/layout';
import { AppPagesModule } from '@app/features';
import { AppCoreModule } from '@app/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Browser Module
    BrowserModule,
    RouterModule.forRoot([]),

    // Core functionality
    AppCoreModule,

    // Feature Module
    AppLayoutModule,
    AppPagesModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

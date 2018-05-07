import { NgModule } from '@angular/core';
import { AppAboutComponent } from './about/about.component';
import { AppContactComponent } from './contact/contact.component';
import { AppNotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppAboutComponent,
    AppContactComponent,
    AppNotFoundComponent
  ],
  exports: [
    AppAboutComponent,
    AppContactComponent,
    AppNotFoundComponent
  ]
})
export class AppPagesModule { }

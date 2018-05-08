import { NgModule } from '@angular/core';
import { AppAboutComponent } from './about/about.component';
import { AppContactComponent } from './contact/contact.component';
import { AppNotFoundComponent } from './not-found/not-found.component';
import { AppHomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppAboutComponent,
    AppContactComponent,
    AppNotFoundComponent,
    AppHomeComponent
  ],
  exports: []
})
export class AppPagesModule { }

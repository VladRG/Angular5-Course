import { NgModule } from '@angular/core';
import { AppAboutComponent } from './about/about.component';
import { AppContactComponent } from './contact/contact.component';
import { AppNotFoundComponent } from './not-found/not-found.component';
import { AppHomeComponent } from './home/home.component';
import { AppSharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppLoginComponent } from './login/login.component';
import { PagesRoutingModule } from './pages.router';

@NgModule({
  declarations: [
    AppAboutComponent,
    AppContactComponent,
    AppNotFoundComponent,
    AppHomeComponent,
    AppLoginComponent
  ],
  imports: [
    AppSharedModule,
    PagesRoutingModule
  ]
})
export class AppPagesModule { }

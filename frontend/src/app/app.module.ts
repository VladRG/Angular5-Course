import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/layout.module';
import { AppLayoutComponent } from './layout/layout.component';
import { AppHeaderComponent } from './layout/header/header.component';
import { AppFooterComponent } from './layout/footer/footer.component';
import { AppAboutComponent } from './about/about.component';
import { AppContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'about',
    component: AppAboutComponent
  },
  {
    path: 'contact',
    component: AppContactComponent
  },
  {
    path: '**',
    redirectTo: 'about'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppAboutComponent,
    AppContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

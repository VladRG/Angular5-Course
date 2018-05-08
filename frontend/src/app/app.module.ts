import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/layout.module';
import { AppLayoutComponent } from './layout/layout.component';
import { AppHeaderComponent } from './layout/header/header.component';
import { AppFooterComponent } from './layout/footer/footer.component';
import { AppAboutComponent } from './pages/about/about.component';
import { AppContactComponent } from './pages/contact/contact.component';
import { AppNotFoundComponent } from './pages/not-found/not-found.component';
import { AppPagesModule } from './pages/pages.module';
import { CommonModule } from '@angular/common';
import { AppLoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppHomeComponent } from './pages/home/home.component';
import { AuthService } from './login/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './login/jwt.interceptor';

const routes: Routes = [
  {
    path: '',
    component: AppHomeComponent
  },
  {
    path: 'about',
    component: AppAboutComponent
  },
  {
    path: 'login',
    component: AppLoginComponent
  },
  {
    path: 'contact',
    component: AppContactComponent
  },
  {
    path: '**',
    component: AppNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AppLayoutModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AppPagesModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

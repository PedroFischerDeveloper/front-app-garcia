
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import routes from './app.routing';
import { HeadComponent } from './components/shared/templates/head/head.component';
import { FooterComponent } from './components/shared/templates/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import {  PostEditComponent } from '../app/components/post-edit/post-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AuthComponent,
    HomeComponent,
    RegisterComponent,
    HeadComponent,
    FooterComponent,
    DashboardComponent,
    DetailsComponent, 
    PostEditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

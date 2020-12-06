import { Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthComponent } from './components/auth/auth.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { DetailsComponent} from './components/details/details.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'post',
    component: PostsComponent,
  },
  {
    path: 'post/edit/:id',
    component: PostEditComponent,
  },
  { path: '**', redirectTo: '/home' }
];
export default routes;

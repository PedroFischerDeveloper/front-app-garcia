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
    path: 'topic',
    component: PostsComponent,
  },
  {
    path: 'topic/edit/:id',
    component: PostEditComponent,
  },
  {
    path: 'topic/details/:id',
    component: DetailsComponent,
  },
  { path: '**', redirectTo: '/home' }
];
export default routes;

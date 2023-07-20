import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { FavoritePageComponent } from './favorite-page/favorite-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
{ path: '',
  component: HomeComponent
},
{
  path: 'search/:searchTerm',
  component: HomeComponent      //showing products inside home component
},
{
  path: 'category/:category',     //localhost:4200/category/{{course-category}}
  component: HomeComponent
},
{
  path: 'course/:id',
  component: CoursePageComponent
},
{
  path: 'favorite-page',
  component: FavoritePageComponent
},
{
  path: 'login',
  component: LoginPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

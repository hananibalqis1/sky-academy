import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursePageComponent } from './course-page/course-page.component';

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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

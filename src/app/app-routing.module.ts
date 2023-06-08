import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

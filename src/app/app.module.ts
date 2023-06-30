import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { CategoriesComponent } from './categories/categories.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { FavoritePageComponent } from './favorite-page/favorite-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    CategoriesComponent,
    CoursePageComponent,
    FavoritePageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    FormsModule         //to use [(ngModel)] == two way data binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { Course } from '../../shared/models/Course';
import { Category } from '../../shared/models/Category';
import { HttpClient } from '@angular/common/http';
import { COURSES_BY_CATEGORY_URL, COURSES_BY_ID_URL, COURSES_BY_SEARCH_URL, COURSES_CATEGORIES_URL, COURSES_URL } from 'src/app/shared/constants/urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(COURSES_URL);    //<> return type of Course array
  }

  getAllCourseBySearchTerm(searchTerm: string){
    // return this.getAll().filter((course) => { course.title.toLowerCase().includes(searchTerm.toLowerCase()); })
    return this.http.get<Course[]>(COURSES_BY_SEARCH_URL + searchTerm);
  }

  getAllCategory(): Observable<Category[]> {
  //  return sample_categories;
    return this.http.get<Category[]>(COURSES_CATEGORIES_URL);
  }

  getAllCourseByCategory(category: string): Observable<Course[]> { //statement?doJob1:doJob2
    // return category == "All" ? this.getAll() : this.getAll().filter((course) => course.categories?.includes(category));
    return category === "All" ? this.getAll() : this.http.get<Course[]>(COURSES_BY_CATEGORY_URL + category);
  }

  getCourseById(id: number): Observable<Course> {
    // return this.getAll().find((course) => course.id == id)!   //will not return undefined when id not valid
    return this.http.get<Course>(COURSES_BY_ID_URL + id);
  }

}

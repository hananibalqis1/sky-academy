import { Injectable } from '@angular/core';
import { Course } from '../../shared/models/Course';
import { Category } from '../../shared/models/Category';
import { sample_categories, sample_courses } from 'backend/src/data';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourseById(id: number): Course {
    return this.getAll().find((course) => course.id == id)!   //will not return undefined when id not valid
  }

  getAllCourseByCategory(category: string): Course[] {      //statement?doJob1:doJob2
    return category == "All" ? this.getAll() : this.getAll().filter((course) => course.categories?.includes(category));
  }

  getAllCourseBySearchTerm(searchTerm: string): Course[]{
    return this.getAll().filter((course) => {
      course.title.toLowerCase().includes(searchTerm.toLowerCase());
    })
  }

  getAllCategory(): Category[] {
   return sample_categories;
  }

  getAll(): Course[] {    //called as Class
    return sample_courses;
  }
}

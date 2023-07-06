import { Component } from '@angular/core';
import { CourseService } from '../services/course/course.service';
import { Course } from '../shared/models/Course';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  courses: Course[] = [];

  constructor(private courseService: CourseService, activatedRoute: ActivatedRoute) {
    let coursesObservable: Observable<Course[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        coursesObservable = this.courseService.getAllCourseBySearchTerm(params.searchTerm);
      else if (params.category)
        coursesObservable = this.courseService.getAllCourseByCategory(params.category);
      else
        coursesObservable = courseService.getAll();

        coursesObservable.subscribe((serverCourses) => {
          this.courses = serverCourses;
        })
    })
  }


  ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     if(params.searchTerm){
  //       // this.courses = this.courseService.getAll().filter(course =>
  //       //   course.title.toLowerCase().includes(params.searchTerm.toLowerCase()))
  //       this.courses = this.courseService.getAllCourseBySearchTerm(params.searchTerm);
  //     } else if(params.category){
  //       this.courses = this.courseService.getAllCourseByCategory(params.category);
  //     } else {
  //       this.courses = this.courseService.getAll();
  //     }
  //   })       //whenever params change, it will put inside subscribe function
  }
}

import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/models/Course';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course/course.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit{
  course!: Course;

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService){
    activatedRoute.params.subscribe((params) => {
      if(params.id){
        this.course = courseService.getCourseById(params.id);
      }
    })
  }

  ngOnInit(): void {}

}

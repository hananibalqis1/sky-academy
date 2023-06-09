import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/models/Course';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../services/course/course.service';
import { FavoriteService } from '../services/favorite/favorite.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit{
  course!: Course;

  constructor(
    activatedRoute: ActivatedRoute,
    courseService: CourseService,
    private favoriteService: FavoriteService,
    private router: Router
  ){
    activatedRoute.params.subscribe((params) => {
      if(params.id){
        courseService.getCourseById(params.id).subscribe(serverCourse => {
          this.course = serverCourse;
        });
      }
    })
  }

  ngOnInit(): void {}

  addToFavorite(){
    this.favoriteService.addToFavorite(this.course);
    this.router.navigateByUrl('/favorite-page');      //address router link
  }

}

import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/models/Category';
import { CourseService } from '../services/course/course.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];    //empty array

  constructor(private courseService: CourseService){}

  ngOnInit(): void {
    this.categories = this.courseService.getAllCategory();
   }

}

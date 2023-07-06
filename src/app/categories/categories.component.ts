import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../shared/models/Category';
import { CourseService } from '../services/course/course.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Input() coursePageCategory?: string[];
  @Input() justifyContent: string = 'center';
  categories?: Category[];    //empty array, set as nullable

  constructor(courseService: CourseService){
    courseService.getAllCategory().subscribe(serverCategories => {
      this.categories = serverCategories;
    });
  }

  ngOnInit(): void {}

}

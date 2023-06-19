import { Injectable } from '@angular/core';
import { Course } from '../../shared/models/Course';
import { Category } from '../../shared/models/Category';

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
   return [
    { name: 'All', count: 16 },
    { name: 'Science', count: 1 },
    { name: 'Sports', count: 2 },
    { name: 'Robotic', count: 2 },
    { name: 'Cooking', count: 1 },
    { name: 'Critical Thinking', count: 3 },
    { name: 'Fun', count: 3 },
    { name: 'Lego', count: 2 },
    { name: 'Healthy', count: 2 }
   ];
  }

  getAll(): Course[] {    //called as Class
    return [
      {
        id: 1,
        title: 'Magic Pepper and Soap',
        price: 5,
        status: ['Not yet enroll', 'Recommended'],
        favorite: true,
        stars: 3.2,
        imageUrl: '/assets/images/learn-science.jpg',
        categories: ['Science', 'Fun', 'Critical Thinking'],
        videoTime: '4-5',
      },
      {
        id: 2,
        title: 'Yoga Games',
        price: 10,
        status: ['Not yet enroll'],
        favorite: false,
        stars: 2.0,
        imageUrl: '/assets/images/learn-yoga.png',
        categories: ['Sports', 'Healthy', 'Fun'],
        videoTime: '10-20',
      },
      {
        id: 3,
        title: 'Lego Block | DIY Phone Stand',
        price: 5,
        status: ['Not yet enroll', 'Recommended'],
        favorite: false,
        stars: 3.2,
        imageUrl: '/assets/images/lego-stand.jpg',
        categories: ['Robotic', 'Lego', 'Critical Thinking'],
        videoTime: '4-5',
      },
      {
        id: 4,
        title: 'Make Sushi at Home!',
        price: 12,
        status: ['Not yet enroll'],
        favorite: true,
        stars: 3.7,
        imageUrl: '/assets/images/learn-sushi.jpg',
        categories: ['Cooking', 'Fun'],
        videoTime: '15-20',
      },
      {
        id: 5,
        title: 'Dancing Ballet',
        price: 14,
        status: ['Not yet enroll'],
        favorite: false,
        stars: 4.0,
        imageUrl: '/assets/images/learn-ballet.jpg',
        categories: ['Sports', 'Fun', 'Healthy'],
        videoTime: '15-20',
      },
      {
        id: 6,
        title: 'Move Your LEGO',
        price: 25,
        status: ['Not yet enroll', 'Recommended'],
        favorite: true,
        stars: 4.6,
        imageUrl: '/assets/images/learn-lego.jpg',
        categories: ['Robotic', 'Lego', 'Critical Thinking'],
        videoTime: '20-30',
      }
    ]
  }
}

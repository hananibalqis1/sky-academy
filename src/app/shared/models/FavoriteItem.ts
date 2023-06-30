import { Course } from "./Course";

export class FavoriteItem{

  constructor(course: Course){
    this.course = course;
    this.price;
  }

  course: Course;
  quantity: number = 1;

  get price(): number{       //instead of using getPrice()
    return this.course.price * this.quantity;
  }
}

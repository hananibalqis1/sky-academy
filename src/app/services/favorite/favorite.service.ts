import { Injectable } from '@angular/core';
import { Course } from 'src/app/shared/models/Course';
import { Favorite } from 'src/app/shared/models/Favorite';
import { FavoriteItem } from 'src/app/shared/models/FavoriteItem';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favorite:Favorite = new Favorite();

  addToFavorite(course: Course): void {
    let favoriteItem = this.favorite.items.find(item => item.course.id === course.id);

    if(favoriteItem){
      this.changeQuantity(course.id, favoriteItem.quantity + 1);
      return;
    }

    this.favorite.items.push(new FavoriteItem(course));
  }

  removeFromFavorite(courseId: number): void{
    this.favorite.items =
    this.favorite.items.filter(item => item.course.id != courseId);
  }

  changeQuantity(courseId: number, quantity: number){
    let favoriteItem = this.favorite.items.find(item => item.course.id === courseId);

    if(!favoriteItem) return;
    favoriteItem.quantity = quantity;
  }

  getFavorite(): Favorite{
    return this.favorite;
  }
}

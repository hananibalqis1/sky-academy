import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Course } from 'src/app/shared/models/Course';
import { Favorite } from 'src/app/shared/models/Favorite';
import { FavoriteItem } from 'src/app/shared/models/FavoriteItem';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  // private favorite:Favorite = new Favorite();
  private favorite:Favorite = this.getFavoriteFromLocalStorage();
  private favoriteSubject: BehaviorSubject<Favorite> = new BehaviorSubject(this.favorite);

  constructor(){}

  addToFavorite(course: Course): void {
    let favoriteItem = this.favorite.items.find(item => item.course.id === course.id);

    if(favoriteItem){
      this.changeQuantity(course.id, favoriteItem.quantity + 1);
      return;
    }

    this.favorite.items.push(new FavoriteItem(course));
    this.setFavoriteToLocalStorage();
  }

  removeFromFavorite(courseId: number): void{
    this.favorite.items =
    this.favorite.items.filter(item => item.course.id != courseId);
    this.setFavoriteToLocalStorage();
  }

  changeQuantity(courseId: number, quantity: number){
    let favoriteItem = this.favorite.items.find(item => item.course.id === courseId);

    if(!favoriteItem) return;
    favoriteItem.quantity = quantity;
    favoriteItem.price = quantity * favoriteItem.course.price;
    this.setFavoriteToLocalStorage();
  }

  clearFavorite(){
    this.favorite = new Favorite();
    this.setFavoriteToLocalStorage();
  }

  getFavorite(): Favorite{
    return this.favorite;
  }

  getFavoriteObservable(): Observable<Favorite>{
    return this.favoriteSubject.asObservable();
  }

  //save to local storage
  private setFavoriteToLocalStorage(): void{
    this.favorite.totalPrice = this.favorite.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.price, 0
    );    //total price

    this.favorite.totalCount = this.favorite.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.quantity, 0
    );    //total count

    //kalau item ada 2, reduce akan call (x,y) 2 times untuk kira mcm looping. 0(currVal) + 20 = 20, 20(currVal) + 40 = 60

    const favoriteJson = JSON.stringify(this.favorite);
    localStorage.setItem('Favorite', favoriteJson);

    //observable that listen
    this.favoriteSubject.next(this.favorite);
  }

  private getFavoriteFromLocalStorage(): Favorite{
    const favoriteJson = localStorage.getItem('Favorite');

    return favoriteJson? JSON.parse(favoriteJson): new Favorite();
  }
}

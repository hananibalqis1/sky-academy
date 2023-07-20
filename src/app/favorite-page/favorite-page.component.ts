import { Component, OnInit } from '@angular/core';
import { Favorite } from '../shared/models/Favorite';
import { FavoriteService } from '../services/favorite/favorite.service';
import { FavoriteItem } from '../shared/models/FavoriteItem';
// import { CourseService } from '../services/course/course.service';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss']
})
export class FavoritePageComponent implements OnInit{

  favorite!:Favorite;

  constructor(private favoriteService: FavoriteService){
    // this.setFavorite();
    //get observable and update each time got new value
    this.favoriteService.getFavoriteObservable().subscribe(
      (res) => {    //result of favorite
        this.favorite = res;
      }
    )
  }

  ngOnInit(): void {}

  removeFavorite(favoriteItem: FavoriteItem){
    this.favoriteService.removeFromFavorite(favoriteItem.course.id);
    // this.setFavorite();
  }

  changeQuantity(favoriteItem: FavoriteItem, qtyInString: string){
    const qty = parseInt(qtyInString);
    this.favoriteService.changeQuantity(favoriteItem.course.id, qty);
    // this.setFavorite();
  }

  setFavorite(){      //manual way to set and get function without using observable
    this.favorite = this.favoriteService.getFavorite();
  }
}

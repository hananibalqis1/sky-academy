import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../services/favorite/favorite.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  favoriteQuantity = 0;

  constructor(favoriteService: FavoriteService){
    favoriteService.getFavoriteObservable().subscribe((newFav) => {
      this.favoriteQuantity = newFav.totalCount;
    })
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

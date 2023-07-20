import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../services/favorite/favorite.service';
import { UserService } from '../services/user/user.service';
import { User } from '../shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  favoriteQuantity = 0;
  user!: User;

  constructor(favoriteService: FavoriteService, private userService: UserService){
    favoriteService.getFavoriteObservable().subscribe((newFav) => {
      this.favoriteQuantity = newFav.totalCount;
    });

    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
  }

  ngOnInit(): void {
  }

  logout(){
    this.userService.logout();
  }

  get isAuth(){
    return this.user.token;
  }
}

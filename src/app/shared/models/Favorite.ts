import { FavoriteItem } from "./FavoriteItem";

export class Favorite{
  items: FavoriteItem[] = [];

  totalPrice: number = 0;
  totalCount: number = 0;
  // get totalPrice(): number{
  //   let totalPrice = 0;

  //   this.items.forEach(item => {
  //     totalPrice += item.price;
  //   });

  //   return totalPrice;
  // }
}

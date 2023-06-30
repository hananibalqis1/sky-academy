import { FavoriteItem } from "./FavoriteItem";

export class Favorite{
  items: FavoriteItem[] = [];

  get totalPrice(): number{
    let totalPrice = 0;

    this.items.forEach(item => {
      totalPrice += item.price;
    });

    return totalPrice;
  }
}

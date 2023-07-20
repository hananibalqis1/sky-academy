import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  cartQuantity = 0;

  constructor(cartService: CartService){
    // cartService.

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

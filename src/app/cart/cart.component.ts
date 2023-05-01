import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  cartItemCount = 0;
  cartTotal = 0;

  // cartCount: number = 0;

  addToCart() {
    this.cartItemCount++;
  }

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this.cartItemCount = this.cartService.getCartItemCount();
    this.cartTotal = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  incrementItem(item: any) {
    this.cartService.addToCart(item);
    this.cartItems = this.cartService.getItems();
    this.cartItemCount = this.cartService.getCartItemCount();
    this.cartTotal = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  decrementItem(item: any) {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getItems();
    this.cartItemCount = this.cartService.getCartItemCount();
    this.cartTotal = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  removeItem(item: any) {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getItems();
    this.cartItemCount = this.cartService.getCartItemCount();
    this.cartTotal = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-cart-button',
//   templateUrl: './cart-button.component.html',
//   styleUrls: ['./cart-button.component.css']
// })
// export class CartButtonComponent {
//   cartCount: number = 0;

//   addToCart() {
//     this.cartCount++;
//   }
// }

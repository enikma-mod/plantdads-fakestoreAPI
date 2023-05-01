import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: any[] = [];
  cartItemCount = 0;

  // cartItems: Product[] = [];
  // cartItemCount: number = 0;
  // cartCount: number = 0;
  // cartItems: any;

  //emit an event from the CartService and listen to it in the NavbarComponent
  cartUpdated: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }



  getCartItemCount() {
    return this.cartItemCount;
  }

  getItems() {
    return this.items;
  }

  //add to cart
  addToCart(item: any) {

    // checks if the item already exists in the cart
    // If it does, it increases the quantity of the existing item by 1.
    // If it doesn't exist, it sets the quantity of the item to 1 and adds it to the cart. Finally, it increments the cart item count by 1.
    const existingItem = this.items.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      item.quantity = 1;
      this.items.push(item);
    }
    this.cartItemCount += 1;

    this.cartUpdated.emit(this.cartItemCount);
  }


  removeFromCart(item: any) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      const existingItem = this.items[index];
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        this.items.splice(index, 1);
      }
      this.cartItemCount -= 1;
    }
  }
}

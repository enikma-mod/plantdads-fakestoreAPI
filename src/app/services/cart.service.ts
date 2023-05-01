import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: any[] = [];
  private cartItemCount = 0;
  getCartTotal: any;

  cartCount: number = 0;

  constructor() { }



  getCartItemCount() {
    return this.cartItemCount;
  }

  getItems() {
    return this.items;
  }

  //add to cart
  addToCart(item: any) {
    const existingItem = this.items.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      item.quantity = 1;
      this.items.push(item);
    }
    this.cartItemCount += 1;
    this.cartCount++;
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

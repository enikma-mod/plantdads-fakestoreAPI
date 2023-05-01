import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // cartCount: number = 0;
  cartItemCount: any = 0;
  
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartUpdated.subscribe(count => {
      this.cartItemCount = count;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  
  //image-hover when the cursor is on the image
  changeImage(imageUrl: string) {
  const img = document.getElementById('img-card') as HTMLImageElement;
  img.src = imageUrl;
  }

  products: any = [];

  //an instance of FakestoreService service stored under the 
  //fakestoreService variable to be used locally.
  constructor(private fakestoreService: ApiService, private cartService: CartService) { }

  ngOnInit() {
    this.fakestoreService.getAllProducts()
      .subscribe((data:any) => {
      this.products = data;
    });

    this.products = this.fakestoreService.getAllProducts();
    
  }
 
  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  // addToCart(product: any) {
  //   this.cartService.addToCart(product);
  //   alert('Added to cart!');
  // }

}


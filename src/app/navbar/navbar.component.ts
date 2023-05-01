import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // cartCount: number = 0;
  cartItemCount: number = 0;
  
  constructor() { }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL:string = 'https://fakestoreapi.com/products';

  //HttpClient is stored under the instance of the local variable = http
  constructor(private http: HttpClient) { }

  //@GET - All products
  getAllProducts() {
    return this.http.get(this.URL);
  }
}

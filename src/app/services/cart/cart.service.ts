import { Product } from '../../products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string, price: number }[]>('assets/shipping.json');
  }

  addToLocalStorage() {
    if (localStorage.hasOwnProperty("alreadyPurchased")) {
      const alreadyPurchased = localStorage.getItem('alreadyPurchased')!.split(",");
      this.items.forEach(item => {
        if (!alreadyPurchased.includes(String(item.id))) {
          alreadyPurchased.push(`${item.id}`);
          localStorage.setItem('alreadyPurchased', `${alreadyPurchased}`);
        }
      });
    } else {
      let alreadyPurchased: string[] = [];

      this.items.forEach(item => {
        alreadyPurchased.push(`${item.id}`);
      });

      localStorage.setItem('alreadyPurchased', `${alreadyPurchased}`);
    }
  }
}

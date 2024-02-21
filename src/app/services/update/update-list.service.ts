import { Injectable } from '@angular/core';
import { products } from '../../products';

@Injectable({
  providedIn: 'root'
})
export class UpdateListService {

  products = [...products];
  purchased: string[] = [];

  constructor() { }

  /* updateList() {
    if (localStorage.hasOwnProperty("alreadyPurchased")) {
      const storage = JSON.parse(localStorage.getItem('alreadyPurchased')!);

      this.purchased = this.products.filter(product => storage.includes(product.id));
      console.log(this.purchased);
    }
    return this.purchased;
  } */
}

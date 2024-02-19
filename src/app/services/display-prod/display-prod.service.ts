import { Injectable } from '@angular/core';
import { Product, products } from '../../products';
import { Provider } from '../../providers';

@Injectable({
  providedIn: 'root'
})
export class DisplayProdService {

  constructor() { }

  getProviderProducts(provider: Provider) {
    return products.filter(product => product.provider === provider.name);
  }

}

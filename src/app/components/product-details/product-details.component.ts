import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product, products } from '../../products';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart/cart.service';
import { Provider } from '../../providers';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;
  provider: Provider | undefined;

  constructor(
    private route: ActivatedRoute
    , private cartService: CartService
    , private http: HttpClient
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);
    this.http.get<Provider[]>('assets/providers.json').subscribe(
      providersList => {
        this.provider = providersList.find(provider => provider.name === this.product?.provider);
      },
      error => {
        console.error('Error fetching providers:', error);
      }
    );
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}

import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { ProviderDetailsComponent } from './components/provider-details/provider-details.component';
import { ProviderListComponent } from './components/provider-list/provider-list.component';

export const routes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'products/:productId', component: ProductDetailsComponent },
    { path: 'cart', component: CartComponent },
    { path: 'cart/shipping', component: ShippingComponent },
    { path: 'providers', component: ProviderListComponent },
    { path: 'providers/:providerId', component: ProviderDetailsComponent},
];

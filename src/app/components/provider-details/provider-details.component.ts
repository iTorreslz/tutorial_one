import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Provider } from '../../providers';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DisplayProdService } from '../../services/display-prod/display-prod.service';
import { Product } from '../../products';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-provider-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './provider-details.component.html',
  styleUrl: './provider-details.component.css'
})
export class ProviderDetailsComponent {

  provider: Provider | undefined;
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private displayProdService: DisplayProdService,
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const providerIdFromRoute = Number(routeParams.get('providerId'));
    this.http.get<Provider[]>('assets/providers.json').subscribe(
      providersList => {
        this.provider = providersList.find(provider => provider.id === providerIdFromRoute);
        this.products = this.displayProdService.getProviderProducts(this.provider!);
      },
      error => {
        console.error('Error fetching providers:', error);
      }
    );
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Provider } from '../../providers';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-provider-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './provider-list.component.html',
  styleUrl: './provider-list.component.css'
})
export class ProviderListComponent {
  providers: Provider[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Provider[]>('assets/providers.json').subscribe(
      providersList => {
        this.providers = providersList;
      },
      error => {
        console.error('Error fetching providers:', error);
      }
    );
  }
}

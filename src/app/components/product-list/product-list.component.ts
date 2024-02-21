import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { products } from '../../products';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';
import { RouterModule } from '@angular/router';
import { UpdateListService } from '../../services/update/update-list.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductAlertsComponent, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [...products];

  /* constructor( private listService: UpdateListService) {
    this.listService.updateList();
  } */

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}

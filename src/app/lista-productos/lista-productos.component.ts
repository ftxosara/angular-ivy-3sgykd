import { Component } from '@angular/core';

import { productos } from '../productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productos = productos;

  share() {
    window.alert('The product has been shared!');
  }
}


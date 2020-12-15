import { Component } from '@angular/core';

import { products } from '../productos';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ProductListComponent {
  productos = products;

  share() {
    window.alert('The product has been shared!');
  }
}


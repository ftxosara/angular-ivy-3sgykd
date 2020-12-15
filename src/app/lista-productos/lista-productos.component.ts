import { Component } from '@angular/core';

import { Component } from '../productos';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class listaproductosComponent{
productos=productos;

share() {
  window.alert('el producto ha sido compartido');
}

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';


@NgModule({
  imports: [ 
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: ListaProductosComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ListaProductosComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

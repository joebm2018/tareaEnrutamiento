import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductosComponent } from './components/productos/productos.component';
import { HomeComponent } from './components/home/home.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ErrorComponent } from './components/error/error.component';

import {Rutas} from './app.routes';
import { CrearProductosComponent } from './components/crear-productos/crear-productos.component';
import { VerProductosComponent } from './components/ver-productos/ver-productos.component'

import { FormsModule } from '@angular/forms';
import { CrearClientesComponent } from './components/crear-clientes/crear-clientes.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductosComponent,
    HomeComponent,
    ClientesComponent,
    ErrorComponent,
    CrearProductosComponent,
    VerProductosComponent,
    CrearClientesComponent
  ],
  imports: [
    BrowserModule,
    Rutas,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

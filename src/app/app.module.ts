import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductosComponent } from './components/productos/productos.component';
import { HomeComponent } from './components/home/home.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ErrorComponent } from './components/error/error.component';

import {Rutas} from './app.routes'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductosComponent,
    HomeComponent,
    ClientesComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    Rutas,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.css']
})
export class CrearProductosComponent implements OnInit {

  objProductos={
    prod_name:'',
    prod_stock:'',
    prod_prec:''
  }
  constructor() { }

  ngOnInit() {
  }

}

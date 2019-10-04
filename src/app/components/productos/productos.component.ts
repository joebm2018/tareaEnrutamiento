import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductosService } from 'src/app/services/productos.service';

import { Router} from '@angular/router';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit,OnDestroy {

  productos;
  subscriptor:Subscription;
  constructor(private _sPRoductos:ProductosService,
              private _sRouter:Router) { }

  ngOnInit() {
    this.subscriptor=this._sPRoductos.getProductos().subscribe((resultado)=>{
      this.productos=resultado;
    })
  }
  ngOnDestroy(){
    this.subscriptor.unsubscribe();
  }
  crearFactura(){
    this._sRouter.navigate(['productos','crear']);
  }
}

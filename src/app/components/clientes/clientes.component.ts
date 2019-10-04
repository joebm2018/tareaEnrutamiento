import { Component, OnInit, OnDestroy} from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Subscription } from 'rxjs';

import {Router} from '@angular/router';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit , OnDestroy{

  clientes;
  subscriptor1:Subscription;
  constructor(private _sClientes:ClientesService,
              private _sRouter:Router) { }

  ngOnInit() {
    this.subscriptor1=this._sClientes.getClientes().subscribe((resul)=>{
      this.clientes=resul;
    })
  }
  ngOnDestroy(){
    this.subscriptor1.unsubscribe();
  }
  crearCliente(){
    this._sRouter.navigate(['clientes','crear'])
  }

}

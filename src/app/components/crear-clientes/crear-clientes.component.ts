import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-clientes',
  templateUrl: './crear-clientes.component.html',
  styleUrls: ['./crear-clientes.component.css']
})
export class CrearClientesComponent implements OnInit {

  objClientes={
    clie_name:'',
    clie_last:'',
    clie_dire:'',
    clie_dir:''
  }
  constructor() { }

  ngOnInit() {
  }

}

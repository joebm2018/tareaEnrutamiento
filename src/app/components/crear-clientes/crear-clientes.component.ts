import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClientesService } from 'src/app/services/clientes.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-clientes',
  templateUrl: './crear-clientes.component.html',
  styleUrls: ['./crear-clientes.component.css']
})
export class CrearClientesComponent implements OnInit {

  objClientes={
    clie_name:'',
    clie_last:'',
    clie_tel:'',
    clie_dir:''
  }
  subscriptor:Subscription;
  constructor(private _sCliente:ClientesService,
            private _sRouter:Router) { }

  ngOnInit() {
  }
  

  crearCliente(){
    Swal.fire({
      title:'Espere un momento',
      text:'Estamos Registrando El Cliente',
      type:'info',
      allowOutsideClick:false,
      showConfirmButton:false
    })
    
    this.subscriptor=this._sCliente.postCliente(this.objClientes).subscribe((rpta)=>{
      if (rpta.id){
        // si tiene un campo id asignado implica que el objeto ha sido creado
        Swal.fire({
          title:'Éxito',
          type:'success',
          text:'La factura ha sido creada con exito mafren',
          confirmButtonText:'Aceptar',
          allowOutsideClick:false //no permite que se haga click fuera del alert
        }).then((result)=>{
          if (result.value){
            this._sRouter.navigate(['clientes']);
          }
        });
      }
    });
  
  }
}

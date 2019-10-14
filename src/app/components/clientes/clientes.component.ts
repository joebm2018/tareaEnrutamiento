import { Component, OnInit, OnDestroy} from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
declare var $:any;
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit , OnDestroy{

  clientes;
  subscriptor1:Subscription;
  objClientes={
    id:'',
    clie_name:'',
    clie_last:'',
    clie_tel:'',
    clie_dir:''
  }
  clientesSeleccionados:Array<any>=[];
  constructor(private _sClientes:ClientesService,
              private _sRouter:Router) { }

  ngOnInit() {
    this.traerClientes();
  }
  ngOnDestroy(){
    this.subscriptor1.unsubscribe();
  }
  traerClientes(){
    this.subscriptor1=this._sClientes.getClientes().subscribe((resul)=>{
      this.clientes=resul;
    })
  }
  crearCliente(){
    this._sRouter.navigate(['clientes','crear'])
  }

  
  borrarCliente(id){
    // console.log("se esta borrando el id:"+id);
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras Revertir lo Borrado!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar!'
    }).then((result) => {
      if (result.value) {
        this._sClientes.deleteCliente(id).subscribe((rpta)=>{
          if(rpta.id){
            Swal.fire(
              'Eliminado!',
              'El Cliente ha sido borrado.',
              'success'
            )
          }
          this.traerClientes();
        });
        
      }
    })
  }
  
  abrirModalEditar(id){
    console.time("tiempo");
    Swal.fire({
      type:'info',
      title:'Espere un Momento',
      html:`<h2 class="display-3">Espere un momento</h2>
      <i class="fa fa-refresh fa-3x fa-spin" ></i><br>
      <p>Esperando al Servidor</p>`,
      allowOutsideClick:false,
      showConfirmButton:false
    })
    this._sClientes.getCliente(id).subscribe((resultado)=>{
      Swal.close();
      console.log(resultado);
      console.timeEnd("tiempo");
      if (resultado.id){
        this.objClientes=resultado;
        $("#modalEditar").modal("show");
      }
  
    })
    
  }
  
  actualizarCliente(objClientes){
   
    
    this._sClientes.putCliente(this.objClientes).subscribe((resultado)=>{
      if(resultado.id){
      
        this.traerClientes();
        $("#modalEditar").modal("hide");
      }
    })
    
  }
  seleccionarCliente(evento,cliente){
    if(evento.target.checked){
      this.clientesSeleccionados.push(cliente);
      console.log(this.clientesSeleccionados);
    }else{
      
      for (let i = 0; i < this.clientesSeleccionados.length; i++) {
          if(cliente.id==this.clientesSeleccionados[i].id){
            // array.splice(posicion,cantElementos)
            this.clientesSeleccionados.splice(i,1);
            console.log(this.clientesSeleccionados);
            
          }   
      }
    }
  }
  eliminarClientes(){
      Swal.fire({
      title: 'Estas seguro de borrar estos Clientes?',
      text: "No podras Revertir lo Borrado!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar!'
    }).then((result) => {
      if (result.value) {
        this._sClientes.deleteClientes(this.clientesSeleccionados).subscribe((rpta)=>{
          if(rpta[0].id){
            Swal.fire(
              'Eliminado!',
              'Su facturas han sido borradas.',
              'success'
            )
          }
          this.clientesSeleccionados=[];
          this.traerClientes();
        });
        
      }
    })
  }
}

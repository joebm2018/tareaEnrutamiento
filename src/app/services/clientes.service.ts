import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_BACKEND} from '../../environments/environment.prod'
import {forkJoin} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  arregloRespuestas:Array<any>=[];

  constructor(private _sHttps:HttpClient) { }
  getClientes():Observable<any>{
    return this._sHttps.get(`${URL_BACKEND}/clientes`);
  }
  getCliente(id):Observable<any>{
    return this._sHttps.get(`${URL_BACKEND}/clientes/${id}`);
  }
  postCliente(objClientes):Observable<any>{
    let objClientesString=JSON.stringify(objClientes);
   
    let misHeaders=new HttpHeaders().set("Content-Type","application/json");
    return this._sHttps.post(`${URL_BACKEND}/clientes`,
                            objClientesString,{headers:misHeaders});
  }
  deleteCliente(idCliente):Observable<any>{
    return this._sHttps.delete(`${URL_BACKEND}/clientes/${idCliente}`);
  }
  putCliente(objClientes):Observable<any>{
    let objClienteString=JSON.stringify(objClientes);
    let misHeaders=new HttpHeaders().set("Content-Type","application/json");
    
    return this._sHttps.put(`${URL_BACKEND}/clientes/${objClientes.id}`,
                            objClienteString,{headers:misHeaders});
  }
  deleteClientes(arregloClientes):Observable<any>{
    arregloClientes.forEach(cliente=>{
      const rpta=this._sHttps.delete(`${URL_BACKEND}/clientes/${cliente.id}`);

      this.arregloRespuestas.push(rpta);
    });
    return forkJoin(this.arregloRespuestas)
  }
}

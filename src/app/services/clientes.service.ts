import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  
  constructor(private _sHttps:HttpClient) { }
  getClientes():Observable<any>{
    return this._sHttps.get("http://5d93e868e020b300147db0f0.mockapi.io/clientes");
  }
}

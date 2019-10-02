import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private _sHttp:HttpClient) { }
  getProductos():Observable<any>{
    return this._sHttp.get("http://5d93e868e020b300147db0f0.mockapi.io/productos");
  }
}

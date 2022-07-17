import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prodotto } from './prodotto-list/prodotto';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {

private baseUrl='http://localhost:8081/ProgettoProdottiApplication/api/v1/prodotti';

  constructor(private http:HttpClient) { }

  getProdotto(id:number):Observable<any>{
     
     return this.http.get(`${this.baseUrl}/${id}`);
  }

  createProdotto(prodotto:Object):Observable<Object>{
     return this.http.post(`${this.baseUrl}`,prodotto);
  }

  updateProdotto(id:number,value:any):Observable<Object>{
       
        return this.http.put(`${this.baseUrl}/${id}`,value);
  }

  deleteProdotto(id:number):Observable<any>{

    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'json'});
  }

  getProdottiList():Observable<any>{
     
    return this.http.get(`${this.baseUrl}`);
  }

}
  
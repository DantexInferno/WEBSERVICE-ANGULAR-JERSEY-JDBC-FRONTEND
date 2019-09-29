import { Injectable } from '@angular/core';
import { Factura } from '../Model/factura.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioFacturaService {

  factura:Factura;
  private httpHeaders= new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http:HttpClient) { }

  url="http://localhost:8080/final-proyecto/servicio/factura";


  getFactura(){
    return this.http.get<Factura[]>(this.url);
  }


  getFacturaId(id:number){
    return this.http.get<Factura>(this.url+"/"+id);
  }

 

  actualizarFactura(factura:Factura):Observable<Factura>{
    return this.http.put<Factura>(this.url+"/"+factura.numfactura,factura,{headers:this.httpHeaders});
  }

  eliminarFactura(factura:Factura){
    return this.http.delete<Factura>(this.url+"/"+factura.numfactura);
  }
}

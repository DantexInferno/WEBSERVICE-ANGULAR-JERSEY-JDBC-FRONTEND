import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Linea } from '../Model/linea.modelo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciolineaService {
  linea:Linea[];

  
  private httpHeaders= new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http:HttpClient) { }

  url="http://localhost:8080/final-proyecto/servicio/linea";


  getLinea(){
    return this.http.get<Linea[]>(this.url);
  }


  getLineaId(id:number){
    return this.http.get<Linea>(this.url+"/"+id);
  }

  crearLinea(linea:Linea):Observable<Linea>{
    return this.http.post<Linea>(this.url+"/registrar",linea,{headers:this.httpHeaders});
    }

  actualizarLinea(linea:Linea):Observable<Linea>{
    return this.http.put<Linea>(this.url+"/"+linea.numerolinea,linea,{headers:this.httpHeaders});
  }

  eliminarLinea(linea:Linea){
    return this.http.delete<Linea>(this.url+"/"+linea.numerolinea);
  }
}

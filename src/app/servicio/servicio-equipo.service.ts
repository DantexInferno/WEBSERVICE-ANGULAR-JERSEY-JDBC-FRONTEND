import { Injectable } from '@angular/core';
import { Equipo } from '../Model/equipo.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioEquipoService {

  equipo:Equipo[];
  private httpHeaders= new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http:HttpClient) { 
    console.log("servicio on");
    
  }


  url="http://localhost:8080/final-proyecto/servicio/equipo";


 


  getEquipo(){
    return this.http.get<Equipo[]>(this.url);
  }

  crearEquipo(equipo:Equipo):Observable<Equipo>{
  return this.http.post<Equipo>(this.url+"/registrar",equipo,{headers:this.httpHeaders});
  }

  getEquipoId(id:number){
    return this.http.get<Equipo>(this.url+"/"+id);
  }

  actualizarEquipo(equipo:Equipo):Observable<Equipo>{
    return this.http.put<Equipo>(this.url+"/"+equipo.equiposerial,equipo,{headers:this.httpHeaders});
  }

  eliminarEquipo(equipo:Equipo){
    return this.http.delete<Equipo>(this.url+"/"+equipo.equiposerial);
  }
}

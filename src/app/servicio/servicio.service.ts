import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from '../Model/persona.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  
  
  persona:Persona[];
  private httpHeaders= new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http:HttpClient) { 
    console.log("servicio on");
    
  }


  url="http://localhost:8080/final-proyecto/servicio/personas";


 


  getPersonas(){
    return this.http.get<Persona[]>(this.url);
  }

  crearPersona(persona:Persona):Observable<Persona>{
  return this.http.post<Persona>(this.url+"/registrar",persona,{headers:this.httpHeaders});
  }

  getPersonaId(id:number){
    return this.http.get<Persona>(this.url+"/"+id);
  }

  actualizarPersona(persona:Persona):Observable<Persona>{
    return this.http.put<Persona>(this.url+"/"+persona.id,persona,{headers:this.httpHeaders});
  }

  eliminarPersona(persona:Persona){
    return this.http.delete<Persona>(this.url+"/"+persona.id);
  }

}

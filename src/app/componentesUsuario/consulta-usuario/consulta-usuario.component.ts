import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/servicio/servicio.service';
import { Persona } from 'src/app/Model/persona.model';

@Component({
  selector: 'app-consulta-usuario',
  templateUrl: './consulta-usuario.component.html',
  styleUrls: ['./consulta-usuario.component.css']
})
export class ConsultaUsuarioComponent implements OnInit {

  personas:Persona[];
  constructor(private service:ServicioService, private router:Router) { }

  ngOnInit() {
    this.service.getPersonas()
    .subscribe(data=>{
      this.personas=data;
    })
  }


  editar(persona:Persona):void{
    localStorage.setItem("id",persona.id.toString());
    this.router.navigate(["editarUsuario"]);
    }
  
   eliminar(persona:Persona){
     this.service.eliminarPersona(persona)
     .subscribe(dat=>{
       this.personas=this.personas.filter(p=>p!==persona);
       alert("Usuario eliminado");
     })
   }

}

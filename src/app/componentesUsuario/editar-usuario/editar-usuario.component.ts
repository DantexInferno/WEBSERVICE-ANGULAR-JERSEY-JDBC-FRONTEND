import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Model/persona.model';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/servicio/servicio.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  persona:Persona=new Persona();
  constructor(private router:Router,private service:ServicioService) { }

  ngOnInit() {
    this.editar();
  }

  editar(){
    let id=localStorage.getItem("id");
    this.service.getPersonaId(+id)
    .subscribe(data=>{
      this.persona=data;
    })
  }

  actualizar(persona:Persona){
  this.service.actualizarPersona(persona)
  .subscribe(data=>{
  this.persona=data;
  alert("se actualizo con exito");
  this.router.navigate(["consultar"])
  })
  }

}

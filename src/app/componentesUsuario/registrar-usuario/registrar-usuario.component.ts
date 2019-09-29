import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Model/persona.model';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/servicio/servicio.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  persona:Persona=new Persona();
  constructor(private route:Router, private servicio:ServicioService) { }


  ngOnInit() {
  
  }

  registrar(persona:Persona){
    this.servicio.crearPersona(this.persona)
    .subscribe(data=>{
      alert("Se agrego con exito");
      this.route.navigate(["consultarUsuario"])
    })
  }

}

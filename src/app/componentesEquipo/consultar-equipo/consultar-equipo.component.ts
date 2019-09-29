import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/Model/equipo.model';
import { ServicioEquipoService } from 'src/app/servicio/servicio-equipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-equipo',
  templateUrl: './consultar-equipo.component.html',
  styleUrls: ['./consultar-equipo.component.css']
})
export class ConsultarEquipoComponent implements OnInit {

  equipos:Equipo[];
  constructor(private service:ServicioEquipoService, private router:Router) { }

  ngOnInit() {
    this.service.getEquipo()
    .subscribe(data=>{
      this.equipos=data;
    })
  }

  editar(equipo:Equipo):void{
    localStorage.setItem("id",equipo.equiposerial.toString());
    this.router.navigate(["editarEquipo"]);
    }
  
   eliminar(equipo:Equipo){
     this.service.eliminarEquipo(equipo)
     .subscribe(data=>{
       this.equipos=this.equipos.filter(p=>p!==equipo);
       alert("Usuario eliminado");
     })
   }
}

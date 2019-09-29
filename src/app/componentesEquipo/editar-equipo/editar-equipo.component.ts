import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/Model/equipo.model';
import { Router } from '@angular/router';
import { ServicioEquipoService } from 'src/app/servicio/servicio-equipo.service';

@Component({
  selector: 'app-editar-equipo',
  templateUrl: './editar-equipo.component.html',
  styleUrls: ['./editar-equipo.component.css']
})
export class EditarEquipoComponent implements OnInit {

  equipo:Equipo=new Equipo();
  constructor(private router:Router,private service:ServicioEquipoService) { }

  ngOnInit() {
    this.editar();
  }

  editar(){
    let id=localStorage.getItem("id");
    this.service.getEquipoId(+id)
    .subscribe(data=>{
      this.equipo=data;
    })
  }

  actualizar(equipo:Equipo){
    this.service.actualizarEquipo(equipo)
    .subscribe(data=>{
    this.equipo=data;
    alert("se actualizo con exito");
    this.router.navigate(["consultarEquipo"])
    })
    }

}

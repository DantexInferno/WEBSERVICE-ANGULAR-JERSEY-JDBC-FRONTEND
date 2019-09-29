import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/Model/equipo.model';
import { Router } from '@angular/router';
import { ServicioEquipoService } from 'src/app/servicio/servicio-equipo.service';

@Component({
  selector: 'app-registrar-equipo',
  templateUrl: './registrar-equipo.component.html',
  styleUrls: ['./registrar-equipo.component.css']
})
export class RegistrarEquipoComponent implements OnInit {

  equipo:Equipo=new Equipo();
  constructor(private route:Router, private servicio:ServicioEquipoService) { }

  ngOnInit() {
  }

  registrar(equipo:Equipo){
    this.servicio.crearEquipo(this.equipo)
    .subscribe(data=>{
      alert("Se agrego con exito");
      this.route.navigate(["consultarEquipo"])
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Linea } from 'src/app/Model/linea.modelo';
import { Router } from '@angular/router';
import { ServiciolineaService } from 'src/app/servicio/serviciolinea.service';

@Component({
  selector: 'app-registrar-linea',
  templateUrl: './registrar-linea.component.html',
  styleUrls: ['./registrar-linea.component.css']
})
export class RegistrarLineaComponent implements OnInit {

  linea:Linea=new Linea();
  constructor(private route:Router, private servicio:ServiciolineaService) { }

  ngOnInit() {
  }

  registrar(linea:Linea){
    this.servicio.crearLinea(this.linea)
    .subscribe(data=>{
      alert("Se agrego con exito");
      this.route.navigate(["consultarLinea"])
    })
  }

}

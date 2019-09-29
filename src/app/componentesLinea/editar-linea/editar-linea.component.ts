import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Linea } from 'src/app/Model/linea.modelo';
import { ServiciolineaService } from 'src/app/servicio/serviciolinea.service';

@Component({
  selector: 'app-editar-linea',
  templateUrl: './editar-linea.component.html',
  styleUrls: ['./editar-linea.component.css']
})
export class EditarLineaComponent implements OnInit {

  linea:Linea=new Linea();
  constructor(private router:Router,private service:ServiciolineaService) { }

  ngOnInit() {
    this.editar();
  }

  editar(){
    let id=localStorage.getItem("id");
    this.service.getLineaId(+id)
    .subscribe(data=>{
      this.linea=data;
    })
  }

  actualizar(linea:Linea){
    this.service.actualizarLinea(linea)
    .subscribe(data=>{
    this.linea=data;
    alert("se actualizo con exito");
    this.router.navigate(["consultarLinea"])
    })
    }

}

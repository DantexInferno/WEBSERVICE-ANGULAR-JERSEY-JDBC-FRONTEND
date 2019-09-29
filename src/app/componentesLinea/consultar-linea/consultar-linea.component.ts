import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Linea } from 'src/app/Model/linea.modelo';
import { ServiciolineaService } from 'src/app/servicio/serviciolinea.service';

@Component({
  selector: 'app-consultar-linea',
  templateUrl: './consultar-linea.component.html',
  styleUrls: ['./consultar-linea.component.css']
})
export class ConsultarLineaComponent implements OnInit {

  lineas:Linea[];
  constructor(private service:ServiciolineaService, private router:Router) { }

  ngOnInit() {
    this.service.getLinea()
    .subscribe(data=>{
      this.lineas=data;
    })
  }

  editar(linea:Linea):void{
    localStorage.setItem("id",linea.numerolinea.toString());
    this.router.navigate(["editarLinea"]);
    }
  
   eliminar(linea:Linea){
     this.service.eliminarLinea(linea)
     .subscribe(data=>{
       this.lineas=this.lineas.filter(p=>p!==linea);
       alert("Usuario eliminado");
     })
   }

}

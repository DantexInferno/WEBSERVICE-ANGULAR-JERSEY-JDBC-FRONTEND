import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioFacturaService } from 'src/app/servicio/servicio-factura.service';
import { Factura } from 'src/app/Model/factura.model';

@Component({
  selector: 'app-editar-factura',
  templateUrl: './editar-factura.component.html',
  styleUrls: ['./editar-factura.component.css']
})
export class EditarFacturaComponent implements OnInit {

  factura:Factura=new Factura();
  constructor(private router:Router,private service:ServicioFacturaService) { }

  ngOnInit() {
    this.editar();
  }

  editar(){
    let id=localStorage.getItem("id");
    this.service.getFacturaId(+id)
    .subscribe(data=>{
      this.factura=data;
    })
  }

  actualizar(factura:Factura){
    this.service.actualizarFactura(factura)
    .subscribe(data=>{
    this.factura=data;
    alert("se actualizo con exito");
    this.router.navigate(["consultarLinea"])
    })
    }
}

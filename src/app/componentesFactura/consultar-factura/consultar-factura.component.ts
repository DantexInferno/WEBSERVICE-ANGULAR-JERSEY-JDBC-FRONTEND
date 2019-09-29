import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/Model/factura.model';
import { Router } from '@angular/router';
import { ServicioFacturaService } from 'src/app/servicio/servicio-factura.service';

@Component({
  selector: 'app-consultar-factura',
  templateUrl: './consultar-factura.component.html',
  styleUrls: ['./consultar-factura.component.css']
})
export class ConsultarFacturaComponent implements OnInit {

  facturas:Factura[];
  constructor(private service:ServicioFacturaService, private router:Router) { }

  ngOnInit() {
    this.service.getFactura()
    .subscribe(data=>{
      this.facturas=data;
    })
  }

  editar(factura:Factura):void{
    localStorage.setItem("id",factura.numfactura.toString());
    this.router.navigate(["editarFactura"]);
    }
  
   eliminar(factura:Factura){
     this.service.eliminarFactura(factura)
     .subscribe(data=>{
       this.facturas=this.facturas.filter(p=>p!==factura);
       alert("Usuario eliminado");
     })
   }
}

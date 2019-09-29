import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaUsuarioComponent } from './componentesUsuario/consulta-usuario/consulta-usuario.component';
import { RegistrarUsuarioComponent } from './componentesUsuario/registrar-usuario/registrar-usuario.component';
import { EditarUsuarioComponent } from './componentesUsuario/editar-usuario/editar-usuario.component';
import { NavComponent } from './componentes/nav/nav.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RegistrarLineaComponent } from './componentesLinea/registrar-linea/registrar-linea.component';
import { EditarLineaComponent } from './componentesLinea/editar-linea/editar-linea.component';
import { ConsultarLineaComponent } from './componentesLinea/consultar-linea/consultar-linea.component';
import { RegistrarEquipoComponent } from './componentesEquipo/registrar-equipo/registrar-equipo.component';
import { EditarEquipoComponent } from './componentesEquipo/editar-equipo/editar-equipo.component';
import { ConsultarEquipoComponent } from './componentesEquipo/consultar-equipo/consultar-equipo.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ServicioService } from './servicio/servicio.service';
import { BodyComponent } from './componentes/body/body.component';
import { ServiciolineaService } from './servicio/serviciolinea.service';
import { ConsultarFacturaComponent } from './componentesFactura/consultar-factura/consultar-factura.component';
import { EditarFacturaComponent } from './componentesFactura/editar-factura/editar-factura.component';
import { ServicioFacturaService } from './servicio/servicio-factura.service';
import { ServicioEquipoService } from './servicio/servicio-equipo.service';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaUsuarioComponent,
    RegistrarUsuarioComponent,
    EditarUsuarioComponent,
    NavComponent,
    FooterComponent,
    RegistrarLineaComponent,
    EditarLineaComponent,
    ConsultarLineaComponent,
    RegistrarEquipoComponent,
    EditarEquipoComponent,
    ConsultarEquipoComponent,
    BodyComponent,
    ConsultarFacturaComponent,
    EditarFacturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ServicioService,
    ServiciolineaService,
    ServicioFacturaService,
    ServicioEquipoService
],
  bootstrap: [AppComponent]
})
export class AppModule { }

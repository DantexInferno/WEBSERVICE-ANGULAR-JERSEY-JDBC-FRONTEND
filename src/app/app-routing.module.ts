import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './componentes/body/body.component';
import { ConsultaUsuarioComponent } from './componentesUsuario/consulta-usuario/consulta-usuario.component';
import { RegistrarUsuarioComponent } from './componentesUsuario/registrar-usuario/registrar-usuario.component';
import { EditarUsuarioComponent } from './componentesUsuario/editar-usuario/editar-usuario.component';
import { ConsultarLineaComponent } from './componentesLinea/consultar-linea/consultar-linea.component';
import { EditarLineaComponent } from './componentesLinea/editar-linea/editar-linea.component';
import { RegistrarLineaComponent } from './componentesLinea/registrar-linea/registrar-linea.component';
import { ConsultarFacturaComponent } from './componentesFactura/consultar-factura/consultar-factura.component';
import { EditarFacturaComponent } from './componentesFactura/editar-factura/editar-factura.component';
import { RegistrarEquipoComponent } from './componentesEquipo/registrar-equipo/registrar-equipo.component';
import { ConsultarEquipoComponent } from './componentesEquipo/consultar-equipo/consultar-equipo.component';
import { EditarEquipoComponent } from './componentesEquipo/editar-equipo/editar-equipo.component';



const routes: Routes = [
  {path:'home',component:BodyComponent},
  {path:'',component:BodyComponent,pathMatch:"full"},
  {path:'consultarUsuario',component:ConsultaUsuarioComponent},
  {path:'registrarUsuario',component:RegistrarUsuarioComponent},
  {path:'editarUsuario',component:EditarUsuarioComponent},
  {path:'consultarLinea',component:ConsultarLineaComponent},
  {path:'editarLinea',component:EditarLineaComponent},
  {path:'registrarLinea',component:RegistrarLineaComponent},
  {path:'consultarFactura',component:ConsultarFacturaComponent},
  {path:'editarFactura',component:EditarFacturaComponent},
  {path:'registrarEquipo',component:RegistrarEquipoComponent},
  {path:'consultarEquipo',component:ConsultarEquipoComponent},
  {path:'editarEquipo',component:EditarEquipoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

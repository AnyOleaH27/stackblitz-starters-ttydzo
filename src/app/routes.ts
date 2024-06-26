import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NuevoProyectoComponent } from "./nuevo-proyecto/nuevo-proyecto.component";
import { ProyectosComponent } from "./proyectos/proyectos.component";
import { SolicitudComponent } from "./solicitud/solicitud.component";
import { ValidarProyectoEmpresaComponent } from "./validar-proyecto-empresa/validar-proyecto-empresa.component";
import { CatalogoEmpresasComponent } from "./catalogo-empresas/catalogo-empresas.component";
import { ValidarSolicitudComponent } from "./validar-solicitud/validar-solicitud.component";
import { SolitudValidarComponent } from "./solitud-validar/solitud-validar.component";
import { OpinionesComponent } from "./opiniones/opiniones.component";

export const routes:Routes= [
    {path: 'proyectos', component:ProyectosComponent},
    {path: 'home', component: HomeComponent},
    {path: 'nuevoProyecto',component:NuevoProyectoComponent},
    {path: 'solicitud',component:SolicitudComponent},
    {path: 'validarPry',component:ValidarProyectoEmpresaComponent},
    {path: 'catalogo',component:CatalogoEmpresasComponent},
    {path: 'validarSolicitud',component:ValidarSolicitudComponent},
    {path: 'solitudValidar',component:SolitudValidarComponent},
    {path: 'opiniones',component:OpinionesComponent}
  ];
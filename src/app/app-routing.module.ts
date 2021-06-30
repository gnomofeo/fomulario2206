import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablausuariosComponent } from './components/tablausuarios/tablausuarios.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CrearusuarioComponent } from './components/crearusuario/crearusuario.component';
import { ActualizarusuarioComponent } from './components/actualizarusuario/actualizarusuario.component';

const routes: Routes = [
  {path:'tabla',component:TablausuariosComponent},
  {path:'crearUsuario',component:CrearusuarioComponent},
  {path:'informacion', component:FormularioComponent},
  {path:'actualizar/:id',component:ActualizarusuarioComponent},
  {path:'**', pathMatch:'full',redirectTo:'tabla'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

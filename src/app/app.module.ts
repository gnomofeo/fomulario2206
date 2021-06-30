import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablausuariosComponent } from './components/tablausuarios/tablausuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearusuarioComponent } from './components/crearusuario/crearusuario.component';
import { ActualizarusuarioComponent } from './components/actualizarusuario/actualizarusuario.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    TablausuariosComponent,
    NavbarComponent,
    CrearusuarioComponent,
    ActualizarusuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

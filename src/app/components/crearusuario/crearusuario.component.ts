import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';
import { ServicioformService } from 'src/app/service/servicioform.service';
import { CrearUsuarioModel } from 'src/app/interfaces/crearUsuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.component.html',
  styleUrls: ['./crearusuario.component.css']
})
export class CrearusuarioComponent implements OnInit {

  formulario:FormGroup;

  constructor(private service:ServicioformService,
    private fb:FormBuilder,private router:Router) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre:[],
      correo:[],
      password:[],
      rol: []
    });
  }
  guardar(){
    if(this.formulario.status == 'VALID'){
      console.log(this.formulario.value);
      const info  = this.formulario.value;
      const  usuario: CrearUsuarioModel = {
        nombre:info.nombre,
        correo:info.correo,
        password:info.password,
        rol: info.rol,
        no_control: '/17330438'
      };
      // console.log(usuario);
      this.service.postUsuario( usuario ).subscribe(res =>{
        console.log(res);
        this.router.navigate(['/fomulario2206/tabla']);
      });
    }
  }

 

}

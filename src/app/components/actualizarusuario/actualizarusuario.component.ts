import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';
import { ServicioformService } from 'src/app/service/servicioform.service';
import { CrearUsuarioModel } from 'src/app/interfaces/crearUsuario.model';
import{ Router,  ActivatedRoute }  from  '@angular/router';


@Component({
  selector: 'app-actualizarusuario',
  templateUrl: './actualizarusuario.component.html',
  styleUrls: ['./actualizarusuario.component.css']
})
export class ActualizarusuarioComponent implements OnInit {

  formulario:FormGroup;
  id:any;
  constructor(private service:ServicioformService,
    private fb:FormBuilder, 
    private router: Router,
    private rutaActiva:ActivatedRoute) {

      const _id = this.rutaActiva.snapshot.paramMap.get('id');
      this.id  =  _id;
      if(_id !=null){
        this.service.getUsuarioId(_id)
      .subscribe(res =>{
        const usuario =  res['usuarios'];
        this.cargarInformacion(usuario);
      });
    }     
  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre:[],
      correo:[],
      password:[],
      rol: []
    });
  }
  cargarInformacion(data:any){
    
    if( data.length>0 ){
      console.log(data);
      this.formulario.controls.nombre.setValue(data[0].nombre);
      this.formulario.controls.correo.setValue(data[0].correo);
      this.formulario.controls.password.setValue(data[0].password);
      this.formulario.controls.rol.setValue(data[0].rol);
    }
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
        no_control: '17330438'
      };
       this.service.putUsuario( this.id,usuario ).subscribe(res =>{
         this.router.navigate(['/fomulario2206/tabla']);
       });
    }
  }

}

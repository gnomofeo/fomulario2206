import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioformService } from '../../service/servicioform.service';

@Component({
  selector: 'app-tablausuarios',
  templateUrl: './tablausuarios.component.html',
  styleUrls: ['./tablausuarios.component.css']
})
export class TablausuariosComponent implements OnInit {

  usuarios:any[] = [];
  
  constructor(private service:ServicioformService,private router:Router) {
     this.service.getUsuario().subscribe(res  => {
       this.usuarios = res['usuarios'];
  
     })
   }
  
  ngOnInit(): void {
    
  }

  actualizar( item:any ){
    console.log('Actualizando');
    console.log(this.usuarios[item]);
    
  }

  eliminar(item:any){
    console.log('Eliminado');

    const _id = this.usuarios[item].id;

    console.log(_id);
    if(confirm('Estas seguro de eliminar este registro?')){
      console.log('Acepto');
        this.service.deleteUsuario(_id).subscribe(res=>{
        console.log(res);
        this.router.navigate(['tabla']);
        });
      }
    }
   




}

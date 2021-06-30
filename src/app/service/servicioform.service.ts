import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServicioformService {
  private apiUrl = 'https://api-pw-ith.herokuapp.com/api/usuarios';

  constructor(private http: HttpClient) { }
  
  public getUsuario(){
    return this.http.get(this.apiUrl+ '/17330438') ;
  }
  public getUsuarioId(_id:any){
    return this.http.get(this.apiUrl+ '/getId/'+_id) ;
  }
  public postUsuario( body:  any ){
    return this.http.post(this.apiUrl, body);
  }

  public deleteUsuario( _id:  any ){
    return this.http.delete(this.apiUrl + '/' + _id);
  }
  public putUsuario(body:any, _id:any){
    return this.http.put(this.apiUrl+ '/'+_id, body);
  }
}

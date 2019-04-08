import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }



  public logar(login:string,senha:string):Observable<any> {
    let user = {
      email:login,
      senha:senha
    }
    let url = 'http://localhost:8080/Revisao/rest/usuario/logar';
    return this.http.post(url ,user);
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers:[
    UsuarioService
  ]
})
export class LoginComponent implements OnInit {

  public login:string;
  public senha:string;

  constructor(private usuarioService:UsuarioService, 
    private router:Router ) { }

  ngOnInit() {
  }

  public logar(){
    this.usuarioService.logar(this.login, this.senha)
      .subscribe( (user:Usuario) =>{
      localStorage.setItem('usuario',JSON.stringify(user));  
      this.router.navigate(['principal']);
    })
  }

}

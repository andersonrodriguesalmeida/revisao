import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../model/usuario';
import { Router } from '@angular/router';
import { FormGroup, FormControl, RequiredValidator, Validators } from '@angular/forms';

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
  public form:FormGroup;

  constructor(private usuarioService:UsuarioService, 
    private router:Router ) { }

  ngOnInit() {
    /**
     * Criando as validações para os componentes do tela
     * Nestas validações os 2 componentes são obrigatórios o 
     * preenchimento
     */
    this.form = new FormGroup({
      email:new FormControl(null, [Validators.required]),
      senha:new FormControl(null, [Validators.required]),
    });
  }

  public logar(){
    //verificando se o preenchimento do formulário esta correto
    if (this.form.invalid){  
      //enviando um erro ao componente de e-mail caso esteja invalido o form
      this.form.controls.email.setErrors(
        {'required':'Os Campos estão estão inválidos!'}
      );
      return ;
    }
    //Recuperando as informações do formulário e atribuindo as variáveis
    this.login =  this.form.get('email').value;
    this.senha = this.form.get('senha').value;
    /**
     * Invocando a requisição ao servidor para realizar o login
     */
    this.usuarioService.logar(this.login, this.senha)
      .subscribe( (user:Usuario) =>{
        if (user != null){
          localStorage.setItem('usuario',JSON.stringify(user));  
          this.router.navigate(['principal']);
        }else {
          this.form.controls.email.setErrors({'invalido':'Login ou senha inválido!'});
        }
    })
  }

}

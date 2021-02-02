import { Component, OnInit } from '@angular/core';

//declare function registarEstudante(user: User):any;
//declare function login(email:string, password: string): any;
//declare function conectado(): any;
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  passwordVisivel = false;

  constructor() { }

  ngOnInit(): void {
  }

  VisualizarPassword(){
    this.passwordVisivel = !this.passwordVisivel;
  }
  /*
  Registar Estudante
  async registar(user: User) {
    if(await registarEstudante(user)){
     
      return true
    }else{
      return false
    }

  }*/

/*
 login
  async InciarSessao(user: User) {
    return await login(user.email, user.password).then(async () => { 
  
        return  true
      }).catch(() => {  
        return false
      })
    }*/

   /* 
   Verificar a Sessão
   async sessao(){
       await conectado().onAuthStateChanged(async newUser => {
        if (newUser)
        return true
        else 
          return false
      })
    }*/
}

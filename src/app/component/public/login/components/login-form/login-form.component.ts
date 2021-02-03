import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

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
  userEmail = new FormControl('');
  userPassword = new FormControl('');
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async EfetuarLogin(){
    this.isLoading = true;
    const data = await this.authService.login(this.userEmail.value, this.userPassword.value).then(async () => { 
      alert('Bem vindo ao ThousandTube');
    }).catch(() => {  
      alert('Error');
    });
    this.isLoading = false;
    this.router.navigate(['/']);
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

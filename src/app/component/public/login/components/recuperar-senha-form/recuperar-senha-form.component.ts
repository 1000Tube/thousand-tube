import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

//declare function recuperarSenha(email: string): any;

@Component({
  selector: 'app-recuperar-senha-form',
  templateUrl: './recuperar-senha-form.component.html',
  styleUrls: ['./recuperar-senha-form.component.scss']
})
export class RecuperarSenhaFormComponent implements OnInit {

  userEmail = new FormControl('');
  isLoading = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  async recuperarPassword() {
    this.isLoading = true;
    const data = await this.authService.recuperarSenha(this.userEmail.value)
    .then(() => {
      alert('foi enviado uma nova password para o seu email!');
    })
    .catch(()=> {
      alert('Erro!, Verifica o seu email');
    })
    this.isLoading = false;
  }


/*
Recuperar senha
  async recuperarPassword(email: string) {
    return await recuperarSenha(email)
    .then(() => {
      return true
    })
    .catch(()=> {
      return false
    })
  }*/
}

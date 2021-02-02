import { Component, OnInit } from '@angular/core';

//declare function recuperarSenha(email: string): any;

@Component({
  selector: 'app-recuperar-senha-form',
  templateUrl: './recuperar-senha-form.component.html',
  styleUrls: ['./recuperar-senha-form.component.scss']
})
export class RecuperarSenhaFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

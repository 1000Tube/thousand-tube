import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  Ano: number;

  Footer = [
    {
      Titulo: 'Links Rápidos',
      Links: [
        {Titulo: 'Conta Premium', Link: ''},
        {Titulo: 'Cursos', Link: '/cursos'},
        {Titulo: 'Instrutores', Link: ''},
      ]
    },
    {
      Titulo: 'Suporte',
      Links: [
        {Titulo: 'Termos e Condições', Link: ''},
        {Titulo: 'Politica de Privacidade', Link: ''}
      ]
    },
    {
      Titulo: 'Junte-se a  nós',
      Links: [
        {Titulo: 'Ser um Professor', Link: ''},
        {Titulo: 'Ser um estudante', Link: ''}
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.Ano = new Date().getFullYear();
  }

}

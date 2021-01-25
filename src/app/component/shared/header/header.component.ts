import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  Menu = [
    {Titulo: 'Pagina Inicial', Link: ''},
    {Titulo: 'Cursos', Link: ''},
    {Titulo: 'Instrutores', Link: ''},
    {Titulo: 'Feedback', Link: ''}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

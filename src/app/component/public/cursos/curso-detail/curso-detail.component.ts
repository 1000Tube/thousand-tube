import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.scss']
})
export class CursoDetailComponent implements OnInit {

  Curso = {
    Titulo: 'Como se tornar um ótimo gráfico Designer em 7 dias',
    Resumo: 'Aqui você irá encontrar os melhores cursos disponibilizados pelo nossos Instrutores.',
    Instruto: 'Alfredo Vidinhas',
    Views: '2,526,471',
    Rates: '15,250',
    Data: 'Janeiro de 2021',
    Categoria: 'Design Gráfico',
    Preco: '12.000',
    Tempo: '8h 17min',
    Preview: 'assets/images/curso.png',
    Descricao: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea. ',
    Aulas: [
      {
        Modulo: 'Introdução',
        Files: [
          {
            Titulo: 'Introdução ao Design Grafico',
            Url: '',
            Tipo: 'Videos'
          },
          {
            Titulo: 'Objectivos',
            Url: '',
            Tipo: 'Videos'
          },
          {
            Titulo: 'Manual de Instrução',
            Url: '',
            Tipo: 'PDF'
          }
        ]
      },
      {
        Modulo: 'Primeiros Passos',
        Files: [
          {
            Titulo: 'Materias necessarios',
            Url: '',
            Tipo: 'Videos'
          }
        ]
      },
      {
        Modulo: 'Nivel Medio',
        Files: [
          {
            Titulo: 'Como ser um profissional?',
            Url: '',
            Tipo: 'Videos'
          }
        ]
      },
      {
        Modulo: 'Nivel Avançado',
        Files: [
          {
            Titulo: 'Como ser um profissional? (Parte 2)',
            Url: '',
            Tipo: 'Videos'
          }
        ]
      }
    ]
  }

  FeedBacks = [
    {
      Descricao: 'Ele sobreviveu não apenas cinco séculos, mas também ao salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com a corrida.',
      User: {Nome: 'Amanda Jackson', Cargo: 'CEO, NRD Group', Image: 'assets/images/alfredo.jpg'}
    },
    {
      Descricao: 'Ele sobreviveu não apenas cinco séculos, mas também ao salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com a corrida.',
      User: {Nome: 'Amanda Jackson', Cargo: 'CEO, NRD Group', Image: 'assets/images/alfredo.jpg'}
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.scss']
})
export class CursoDetailComponent implements OnInit, OnDestroy {

  inscricao: Subscription;

  Curso: any;

  /*Curso = {
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
  }*/

  FeedBacks = [
    {
      Descricao: 'Ele sobreviveu não apenas cinco séculos, mas também ao salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com a corrida.',
      User: {Nome: 'Alfredo Vidinhas', Cargo: 'CEO, NRD Group', Image: 'assets/images/alfredo.jpg'}
    },
    {
      Descricao: 'Ele sobreviveu não apenas cinco séculos, mas também ao salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com a corrida.',
      User: {Nome: 'Atila Sousa', Cargo: 'CEO, NRD Group', Image: 'assets/images/alfredo.jpg'}
    }
  ];

  monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Octubro", "Novembro", "Dezembro"
  ];

  constructor(private route: ActivatedRoute, private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        const data = params.slug;
        this.Curso = JSON.parse(atob(data));
        console.log(this.Curso);
        const date = new Date(this.Curso.Data);
        const time = new Date(this.Curso.Tempo);
        this.Curso.Data = this.monthNames[date.getMonth()] + ' de ' + date.getFullYear();
        this.Curso.Tempo = time.getHours() + 'h ' + time.getMinutes() + 'min';;
      }
    );
  }


  /*
  X - representa a pos no array de aulas
  Y - representa o array dentro de cada aula
  */
  AssistirAula(x: number, y: number){
    const str = btoa(JSON.stringify({x: x, y: y, curso: this.Curso}));
    this.router.navigate(['/cursos/visualizar/', str]);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}

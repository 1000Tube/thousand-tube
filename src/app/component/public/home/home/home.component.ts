import { Component, OnInit } from '@angular/core';
 declare function teste():any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Categorias = [
    {Icon: 'assets/icons/icon_negocios.svg', Titulo: 'Negócios', isVerMais: false},
    {Icon: 'assets/icons/icon_design.svg', Titulo: 'Design', isVerMais: false},
    {Icon: 'assets/icons/icon_dev.svg', Titulo: 'Desenvolvimento', isVerMais: false},
    {Icon: 'assets/icons/icon_linguagens.svg', Titulo: 'Linguagens', isVerMais: false},
    {Icon: 'assets/icons/icon_jogos.svg', Titulo: 'Jogos', isVerMais: false},
    {Icon: 'assets/icons/icon_ver_mais.svg', Titulo: 'Ver mais', isVerMais: true}
  ];

  Recomendados = [
    {Image: 'assets/images/curso.png', Titulo: 'Como se tornar um ótimo gráfico Designer em 7 dias', Categoria: 'Design Gráfico', Tempo: '8h 17min', Views: '2,526,471', Rate: '15,250'},
    {Image: 'assets/images/curso.png', Titulo: 'Como se tornar um ótimo gráfico Designer em 7 dias', Categoria: 'Design Gráfico', Tempo: '8h 17min', Views: '2,526,471', Rate: '15,250'},
    {Image: 'assets/images/curso.png', Titulo: 'Como se tornar um ótimo gráfico Designer em 7 dias', Categoria: 'Design Gráfico', Tempo: '8h 17min', Views: '2,526,471', Rate: '15,250'}
  ];

  Escolhas = [
    {Texto: 'Variados Cursos'},
    {Texto: 'Instrutores Experientes'},
    {Texto: 'Acesso Ilimitado'},
    {Texto: 'Preços Confortaveis'},
    {Texto: '1 mês Gratuito no Primeiro Pagamento'}
  ];

  Conquistas = [
    {Numero: '2400+', Descricao: 'Curso online', Cor: '#2680EB'},
    {Numero: '99,854+', Descricao: 'Alunos Inscritos', Cor: '#00B592'},
    {Numero: '650+', Descricao: 'Instrutores Experientes', Cor: '#FFBE58'},
    {Numero: '1820+', Descricao: 'Recomendações', Cor: '#E0474E'}
  ];

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
    teste();
  }

}

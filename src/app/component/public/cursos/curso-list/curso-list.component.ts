import { Component, OnInit } from '@angular/core';

//declare function cursos():any;

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.scss']
})
export class CursoListComponent implements OnInit {

  mostrarConteudo = true;
  p = 1;
  total: number;

  Cursos = [
    {Image: 'assets/images/curso.png', Titulo: 'Como se tornar um ótimo gráfico Designer em 7 dias', Categoria: 'Design Gráfico', Tempo: '8h 17min', Views: '2,526,471', Rate: '15,250'},
    {Image: 'assets/images/curso.png', Titulo: 'Como se tornar um ótimo gráfico Designer em 7 dias', Categoria: 'Design Gráfico', Tempo: '8h 17min', Views: '2,526,471', Rate: '15,250'},
    {Image: 'assets/images/curso.png', Titulo: 'Como se tornar um ótimo gráfico Designer em 7 dias', Categoria: 'Design Gráfico', Tempo: '8h 17min', Views: '2,526,471', Rate: '15,250'},
    {Image: 'assets/images/curso.png', Titulo: 'Como se tornar um ótimo gráfico Designer em 7 dias', Categoria: 'Design Gráfico', Tempo: '8h 17min', Views: '2,526,471', Rate: '15,250'},
    {Image: 'assets/images/curso.png', Titulo: 'Como se tornar um ótimo gráfico Designer em 7 dias', Categoria: 'Design Gráfico', Tempo: '8h 17min', Views: '2,526,471', Rate: '15,250'},
    {Image: 'assets/images/curso.png', Titulo: 'Como se tornar um ótimo gráfico Designer em 7 dias', Categoria: 'Design Gráfico', Tempo: '8h 17min', Views: '2,526,471', Rate: '15,250'},
    {Image: 'assets/images/curso.png', Titulo: 'Como se tornar um ótimo gráfico Designer em 7 dias', Categoria: 'Design Gráfico', Tempo: '8h 17min', Views: '2,526,471', Rate: '15,250'},
    {Image: 'assets/images/curso.png', Titulo: 'Como se tornar um ótimo gráfico Designer em 7 dias', Categoria: 'Design Gráfico', Tempo: '8h 17min', Views: '2,526,471', Rate: '15,250'},
    {Image: 'assets/images/curso.png', Titulo: 'Como se tornar um ótimo gráfico Designer em 7 dias', Categoria: 'Design Gráfico', Tempo: '8h 17min', Views: '2,526,471', Rate: '15,250'},
    {Image: 'assets/images/curso.png', Titulo: 'Como se tornar um ótimo gráfico Designer em 7 dias', Categoria: 'Design Gráfico', Tempo: '8h 17min', Views: '2,526,471', Rate: '15,250'}
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
  pageChange(pageNumber){
    this.p = pageNumber;
  }

 /* 
 listar cursos
 async listarCursos(){
    await cursos().then((curso) => {
      if(!curso.empty) {
        curso.forEach(doc => {
       //  doc.data().nome;
         //doc.data().categoria; 
        }); 
      }
    });
  }*/
}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CursoService } from 'src/app/service/curso.service';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';

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

  Cursos: any[];
  back: any[];
  searchTerm = new FormControl('');
  isSearching = false;

  /*Cursos = [
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
  ];*/

  constructor(private cursoService: CursoService) { }

  async ngOnInit(): Promise<void> {
   const data = await this.cursoService.cursos();
   data.subscribe((data) => {
     if(!this.isSearching)
     {
      this.Cursos = data;
      this.back = data;
      console.log(data);
     }
   });
   this.Search();
  }
  
  pageChange(pageNumber){
    this.p = pageNumber;
  }

  Search(){
    this.searchTerm.valueChanges
    .pipe(
      map(value => value.trim()),
      debounceTime(200),
      distinctUntilChanged(),
      map((res: any) => {
        this.p = 1;
        if(this.Cursos.length == 0){
          this.Cursos = this.back;
        }
        if(res == ''){
          this.isSearching = false;
        }
        else{
          this.Cursos = this.Cursos.filter(val => val.Titulo.toLowerCase().includes(res.toLowerCase()));
        }
      })
    ).subscribe();
  }

}

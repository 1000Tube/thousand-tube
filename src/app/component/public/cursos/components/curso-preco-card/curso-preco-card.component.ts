import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-preco-card',
  templateUrl: './curso-preco-card.component.html',
  styleUrls: ['./curso-preco-card.component.scss']
})
export class CursoPrecoCardComponent implements OnInit {

  @Input() Preco: string;
  @Input() Categoria: string;
  @Input() Tempo: string;
  @Input() Image: string;

  constructor() { }

  ngOnInit(): void {
  }

}

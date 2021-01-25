import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-card',
  templateUrl: './curso-card.component.html',
  styleUrls: ['./curso-card.component.scss']
})
export class CursoCardComponent implements OnInit {

  @Input() Titulo: string;
  @Input() Categoria: string;
  @Input() Tempo: string;
  @Input() Views: string;
  @Input() Rate: string;
  @Input() Image: string;

  constructor() { }

  ngOnInit(): void {
  }

}

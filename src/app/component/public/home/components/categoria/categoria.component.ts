import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  @Input() Titulo: string;
  @Input() Icon: string;
  @Input() isVerMais: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

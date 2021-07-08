import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { CursoService } from 'src/app/service/curso.service';

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
  @Input() Pago: boolean;
  @Input() Ref: any;

  constructor(private cursoService: CursoService, public authService: AuthService) { }

  ngOnInit(): void {
  }

  async Comprar(){
    const data = await this.cursoService.comprar(this.Ref);
    this.Pago = true;
  }

}

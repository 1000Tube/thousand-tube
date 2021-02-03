import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  @Input() data: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Click(){
    const str = btoa(JSON.stringify(this.data));
    this.router.navigate(['/cursos/', str]);
  }

}

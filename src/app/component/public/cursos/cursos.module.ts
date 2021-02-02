import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursoListComponent } from './curso-list/curso-list.component';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';
import { CursoPrecoCardComponent } from './components/curso-preco-card/curso-preco-card.component';
import { ArquivoComponent } from './components/arquivo/arquivo.component';

@NgModule({
    declarations: [
      CursoListComponent,
      CursoDetailComponent,
      CursoPrecoCardComponent,
      ArquivoComponent
    ],
    imports: [
      CommonModule,
      CursosRoutingModule,
      SharedModule
    ],
    exports:[]
  })
  export class CursosModule { }

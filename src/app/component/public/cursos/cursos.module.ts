import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursoListComponent } from './curso-list/curso-list.component';

@NgModule({
    declarations: [
      CursoListComponent
    ],
    imports: [
      CommonModule,
      CursosRoutingModule,
      SharedModule
    ],
    exports:[]
  })
  export class CursosModule { }

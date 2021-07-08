import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';
import { CursoListComponent } from './curso-list/curso-list.component';
import { CursoProvaComponent } from './curso-prova/curso-prova.component';
import { VisualizarCursoComponent } from './visualizar-curso/visualizar-curso.component';


const cursosRoutes: Routes = [
  {path: '', component: CursoListComponent},
  {path: 'teste-certificacao', component: CursoProvaComponent},
  {path: 'visualizar/:slug', component: VisualizarCursoComponent},
  {path: ':slug', component: CursoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }

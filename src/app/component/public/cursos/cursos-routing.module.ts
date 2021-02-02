import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';
import { CursoListComponent } from './curso-list/curso-list.component';


const cursosRoutes: Routes = [
  {path: '', component: CursoListComponent},
  {path: ':slug', component: CursoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }

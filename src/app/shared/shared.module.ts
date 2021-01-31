import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoCardComponent } from '../component/public/cursos/components/curso-card/curso-card.component';
import { FeedbackCardComponent } from '../component/public/feedback/components/feedback-card/feedback-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationComponent } from '../component/public/common/pagination/pagination.component';


@NgModule({
  declarations: [
    CursoCardComponent,
    FeedbackCardComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports:[
    CursoCardComponent,
    FeedbackCardComponent,
    PaginationComponent,
    NgxPaginationModule
  ]
})
export class SharedModule { }

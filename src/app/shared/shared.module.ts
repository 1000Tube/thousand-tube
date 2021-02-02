import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoCardComponent } from '../component/public/cursos/components/curso-card/curso-card.component';
import { FeedbackCardComponent } from '../component/public/feedback/components/feedback-card/feedback-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationComponent } from '../component/public/common/pagination/pagination.component';
import { AccordionComponent } from '../component/public/common/accordion/accordion.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CursoCardComponent,
    FeedbackCardComponent,
    PaginationComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule
  ],
  exports:[
    CursoCardComponent,
    FeedbackCardComponent,
    PaginationComponent,
    NgxPaginationModule,
    AccordionComponent
  ]
})
export class SharedModule { }

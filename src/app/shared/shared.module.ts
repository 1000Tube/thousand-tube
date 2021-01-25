import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoCardComponent } from '../component/public/cursos/components/curso-card/curso-card.component';
import { FeedbackCardComponent } from '../component/public/feedback/components/feedback-card/feedback-card.component';


@NgModule({
  declarations: [
    CursoCardComponent,
    FeedbackCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CursoCardComponent,
    FeedbackCardComponent
  ]
})
export class SharedModule { }

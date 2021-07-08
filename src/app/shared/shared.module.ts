import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoCardComponent } from '../component/public/cursos/components/curso-card/curso-card.component';
import { FeedbackCardComponent } from '../component/public/feedback/components/feedback-card/feedback-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationComponent } from '../component/public/common/pagination/pagination.component';
import { AccordionComponent } from '../component/public/common/accordion/accordion.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonComponent } from '../component/public/common/radio-button/radio-button.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    CursoCardComponent,
    FeedbackCardComponent,
    PaginationComponent,
    AccordionComponent,
    RadioButtonComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  exports:[
    CursoCardComponent,
    FeedbackCardComponent,
    PaginationComponent,
    NgxPaginationModule,
    AccordionComponent,
    FormsModule,
    ReactiveFormsModule,
    RadioButtonComponent,
    LottieModule
  ]
})
export class SharedModule { }

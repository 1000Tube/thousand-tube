import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { CategoriaComponent } from './components/categoria/categoria.component';

@NgModule({
    declarations: [
      HomeComponent,
      CategoriaComponent
    ],
    imports: [
      CommonModule,
      HomeRoutingModule,
      SharedModule
    ],
    exports:[]
  })
  export class HomeModule { }

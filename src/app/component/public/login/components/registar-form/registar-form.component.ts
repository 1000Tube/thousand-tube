import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registar-form',
  templateUrl: './registar-form.component.html',
  styleUrls: ['./registar-form.component.scss']
})
export class RegistarFormComponent implements OnInit {

  passwordVisivel = false;

  constructor() { }

  ngOnInit(): void {
  }

  VisualizarPassword(){
    this.passwordVisivel = !this.passwordVisivel;
  }

}

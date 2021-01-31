import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  passwordVisivel = false;

  constructor() { }

  ngOnInit(): void {
  }

  VisualizarPassword(){
    this.passwordVisivel = !this.passwordVisivel;
  }

}

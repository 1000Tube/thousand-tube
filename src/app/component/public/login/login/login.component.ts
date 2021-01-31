import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  Ano: number;

  constructor() { }

  ngOnInit(): void {
    this.Ano = new Date().getFullYear();
  }

}

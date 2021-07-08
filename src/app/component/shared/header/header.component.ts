import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  Menu = [
    {Titulo: 'Pagina Inicial', Link: '/'},
    {Titulo: 'Cursos', Link: '/cursos'},
    //{Titulo: 'Instrutores', Link: ''},
    {Titulo: 'Feedback', Link: ''}
  ]

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  Logout(){
    this.authService.logout()
  }

}

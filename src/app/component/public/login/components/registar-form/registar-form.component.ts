import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-registar-form',
  templateUrl: './registar-form.component.html',
  styleUrls: ['./registar-form.component.scss']
})
export class RegistarFormComponent implements OnInit {

  passwordVisivel = false;
  useName = new FormControl('');
  useEmail = new FormControl('');
  usePassword = new FormControl('');
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  VisualizarPassword(){
    this.passwordVisivel = !this.passwordVisivel;
  }

  async registar() {
    this.isLoading = true;
    const user = {email: this.useEmail.value, password: this.usePassword.value, nome: this.useName.value}; 
    console.log("user: ", user)
    const data = await this.authService.registarEstudante(user)
    if(data){
      console.log("resg: ", data)
      //return true
    }else{
      //return false
    }
    this.isLoading = false;
    this.router.navigate(['/login/']);
  }

}

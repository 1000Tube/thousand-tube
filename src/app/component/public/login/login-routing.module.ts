import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RecuperarSenhaFormComponent } from './components/recuperar-senha-form/recuperar-senha-form.component';
import { RegistarFormComponent } from './components/registar-form/registar-form.component';
import { LoginComponent } from './login/login.component';


const loginRoutes: Routes = [
  {path: '', component: LoginComponent, children: 
  [
    {path: '', component: LoginFormComponent},
    {path: 'recuperar-senha', component: RecuperarSenhaFormComponent},
    {path: 'registar', component: RegistarFormComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

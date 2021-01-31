import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './login/login.component';


const loginRoutes: Routes = [
  {path: '', component: LoginComponent, children: 
  [
    {path: '', component: LoginFormComponent},
    {path: 'recuperar-senha', component: LoginFormComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

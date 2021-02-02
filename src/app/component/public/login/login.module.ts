import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RecuperarSenhaFormComponent } from './components/recuperar-senha-form/recuperar-senha-form.component';
import { RegistarFormComponent } from './components/registar-form/registar-form.component';

@NgModule({
    declarations: [
      LoginComponent,
      LoginFormComponent,
      RecuperarSenhaFormComponent,
      RegistarFormComponent
    ],
    imports: [
      CommonModule,
      LoginRoutingModule,
      SharedModule
    ],
    exports:[]
  })
  export class LoginModule { }

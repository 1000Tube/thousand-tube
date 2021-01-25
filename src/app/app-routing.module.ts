import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './component/shared/shell/shell.component';


const routes: Routes = [
  {path: '', component: ShellComponent, children:
    [
      {path: '',
        loadChildren: () =>
        import('./component/public/home/home.module')
          .then(m => m.HomeModule)}
    ],
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

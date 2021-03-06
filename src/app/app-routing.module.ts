import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,    
  },
  {
    path: 'login',
    component: LoginComponent,
    children: [
      
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

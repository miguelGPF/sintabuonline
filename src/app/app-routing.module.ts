import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/components/home/home.component';
import {LoginComponent} from '../app/components/login/login.component'
import {SignUpComponent} from '../app/components/sign-up/sign-up.component'
import  {LandingComponent } from '../app/components/landing/landing.component'
const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Landing', component: LandingComponent },
  { path: '',   redirectTo: 'Home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { PageComponent } from '../app/page/page.component';
import { AppareilComponent } from '../app/appareil/appareil.component';
import { EnfantComponent } from '../app/enfant/enfant.component';
import { HeroesComponent } from '../app/heroes/heroes.component';
import { ProductDetailsComponent } from '../app/product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "appareil",
    component: AppareilComponent
  },
  { 
    path: 'product-details/:id', 
    component: ProductDetailsComponent
  },
  {
    path: "hero",
    component: HeroesComponent
  },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },


  {
    path: "page",
    component: PageComponent,
    children: [
      
      { 
        path: 'enfant', component: EnfantComponent 
      },
      {
        path: "home",
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

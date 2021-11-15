import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';

import { AuthgardService } from './services/authgard.service';

import { ShoppingComponent } from './shopping/shopping.component';

import { UpdatepComponent } from './updatep/updatep.component';
import { AdClientComponent } from './ad-client/ad-client.component';
import { UpCComponent } from './up-c/up-c.component';
import { LoginadComponent } from './loginad/loginad.component';
import { RegisteradComponent } from './registerad/registerad.component';
import { AdminAuthService } from './services/admin-auth.service';
import { AdProductComponent } from './ad-product/ad-product.component';
import { AdOrdersComponent } from './ad-orders/ad-orders.component';
import { PayComponent } from './pay/pay.component';
import { CategoriesComponent } from './categories/categories.component';

import { MarkComponent } from './mark/mark.component';
import { KhComponent } from './kh/kh.component';


import { UpcaComponent } from './upca/upca.component';
import { UpmComponent } from './upm/upm.component';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'shopping',component:ShoppingComponent},
  {path:'products',component:ProductsComponent},
  {path:'about',component:AboutComponent,canActivate:[AdminAuthService]},
  {path:'home/:key',component:ShoppingComponent},
  {path:'ad-product',component:AdProductComponent,canActivate:[ AdminAuthService]} ,
  {path:'ad-product/:key',component:UpdatepComponent,canActivate:[AdminAuthService]},
  {path:'ad-client',component:AdClientComponent,canActivate:[AdminAuthService]},
  {path:'ad-client/:key',component:UpCComponent,canActivate:[AdminAuthService]},
  {path:'ad-orders',component:AdOrdersComponent,canActivate:[AdminAuthService]},
  {path:'loginad',component:LoginadComponent},
  {path:'registerad',component:RegisteradComponent},
  {path:'shopping/:key',component:PayComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'mark',component:MarkComponent},
  { path: 'products/:key', component:DetailComponent},
  {path:'categories/:key',component:UpcaComponent,canActivate:[AdminAuthService]},
  {path:'mark/:key',component:UpmComponent,canActivate:[AdminAuthService]},

];


@NgModule({
 

  declarations: [],

  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ] , exports: [RouterModule],
})
export class AppRoutingModule { }

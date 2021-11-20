import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { environment } from 'src/environments/environment';

import { ShoppingComponent } from './shopping/shopping.component';
import { LoginadComponent } from './loginad/loginad.component';
import { RegisteradComponent } from './registerad/registerad.component';
import { AdOrdersComponent } from './ad-orders/ad-orders.component';

import { AdProductComponent } from './ad-product/ad-product.component';
import { AdClientComponent } from './ad-client/ad-client.component';
import { UpdatepComponent } from './updatep/updatep.component';
import { UpCComponent } from './up-c/up-c.component';
import { AuthService } from './services/auth.service';
import { StarReviewComponent } from './star-review/star-review.component';
import { PayComponent } from './pay/pay.component';
import { CategoriesComponent } from './categories/categories.component';
import { MarkComponent } from './mark/mark.component';
import { LmComponent } from './lm/lm.component';
import { KhComponent } from './kh/kh.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UpcaComponent } from './upca/upca.component';
import { UpmComponent } from './upm/upm.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';
import { UpoComponent } from './upo/upo.component';
import {NgxPaginationModule} from 'ngx-pagination'; 





@NgModule({
declarations: [
AppComponent,
NavbarComponent,
HomeComponent,
ProductsComponent,
LoginComponent,
RegisterComponent,
ShoppingComponent,
LoginadComponent,
RegisteradComponent,
AdOrdersComponent,
AdProductComponent,
AdClientComponent,
UpdatepComponent,
UpCComponent,
StarReviewComponent,
PayComponent,
CategoriesComponent,
MarkComponent,
LmComponent,
KhComponent,
UpcaComponent,
UpmComponent,
FooterComponent,
SectionComponent,
AboutComponent,
DetailComponent,
UpoComponent,



  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

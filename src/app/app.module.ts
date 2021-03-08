import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { CarouselModule } from 'ngx-bootstrap/carousel';// ngx-bootstrap slider
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';// ngx -bootrap button

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';//it can import automatic sign up
import { appRoute } from "./router";
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { SidemenComponent } from './sidemen/sidemen.component';

const appRoutes :Routes = [
  {path:'cart',component:CartComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'slider',component:SliderComponent},
  {path:'product',component:ProductComponent},
  {path:'footer',component:FooterComponent},
  {path : 'sidemenu',component:SidemenComponent}
]

@NgModule({
  
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    CartComponent,
    SliderComponent,
    FooterComponent,
    ProductComponent,
    SidemenComponent,
  ],
  imports: [
    CarouselModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(appRoute),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

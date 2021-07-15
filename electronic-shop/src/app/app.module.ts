import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { BuyNowComponent } from './shop/buy-now/buy-now.component';
import { AddToCartComponent } from './shop/add-to-cart/add-to-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material Imports
import {MatDialogModule} from '@angular/material/dialog';
import { ViewProductComponent } from './shop/view-product/view-product.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { OrderCheckoutComponent } from './my-cart/order-checkout/order-checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ShopComponent,
    BuyNowComponent,
    AddToCartComponent,
    ViewProductComponent,
    MyCartComponent,
    OrderCheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

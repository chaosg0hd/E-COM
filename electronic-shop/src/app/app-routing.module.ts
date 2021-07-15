import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { BuyNowComponent } from './shop/buy-now/buy-now.component';
import { AddToCartComponent } from './shop/add-to-cart/add-to-cart.component';
import { ViewProductComponent } from './shop/view-product/view-product.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { OrderCheckoutComponent } from './my-cart/order-checkout/order-checkout.component';


const routes: Routes = [

  // ONLINE ELECTRONIC SHOP SYSTEM
  { path: '', redirectTo: 'online-electronic-shop/home', pathMatch: 'full'},
  { path: 'online-electronic-shop/login', component : LoginComponent},
  { path: 'online-electronic-shop/register', component : RegisterComponent},
  { path: 'online-electronic-shop/home', component : HomeComponent},
  { path: 'online-electronic-shop/shop', component : ShopComponent},
  { path: 'online-electronic-shop/product-details/buy-now', component : BuyNowComponent},
  { path: 'online-electronic-shop/product-details/add-to-cart', component : AddToCartComponent},
  { path: 'online-electronic-shop/product-details', component : ViewProductComponent},
  { path: 'online-electronic-shop/my-cart', component : MyCartComponent},
  { path: 'online-electronic-shop/my-cart/order-checkout', component : OrderCheckoutComponent},
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

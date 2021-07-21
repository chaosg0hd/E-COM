import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { BuyNowComponent } from './shop/buy-now/buy-now.component';
import { AddToCartComponent } from './shop/add-to-cart/add-to-cart.component';
import { ViewProductComponent } from './shop/view-product/view-product.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { OrderCheckoutComponent } from './my-cart/order-checkout/order-checkout.component';
import { ProfileAccComponent } from './profile-acc/profile-acc.component';
import { PurchaseHistoryComponent } from './profile-acc/purchase-history/purchase-history.component';
import { EditProfileComponent } from './profile-acc/edit-profile/edit-profile.component';
import { MyAddressComponent } from './profile-acc/my-address/my-address.component';
import { AddAddressComponent } from './profile-acc/my-address/add-address/add-address.component';
import { EditAddressComponent } from './profile-acc/my-address/edit-address/edit-address.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductsComponent } from './admin/products/products.component';
import { OrdersComponent } from './admin/orders/orders.component';





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
  { path: 'online-electronic-shop/profile', component : ProfileAccComponent},
  { path: 'online-electronic-shop/purchase-history', component : PurchaseHistoryComponent},
  { path: 'online-electronic-shop/profile/edit-profile', component : EditProfileComponent},
  { path: 'online-electronic-shop/profile/my-addresses', component : MyAddressComponent},
  { path: 'online-electronic-shop/profile/my-addresses/add-address', component : AddAddressComponent},
  { path: 'online-electronic-shop/profile/my-addresses/edit-address', component : EditAddressComponent},

  // ONLINE ELECTRONIC SHOP ADMIN PANEL
  { path: 'online-electronic-shop/admin-panel/dashboard', component : DashboardComponent},
  { path: 'online-electronic-shop/admin-panel/orders', component : OrdersComponent},
  { path: 'online-electronic-shop/admin-panel/products', component : ProductsComponent},




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

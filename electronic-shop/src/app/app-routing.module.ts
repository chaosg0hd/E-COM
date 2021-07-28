import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';

import { AdminComponent } from './index/admin/admin.component';
import { DashboardComponent } from './index/admin/dashboard/dashboard.component';
//import { DeliveryComponent } from './delivery/delivery.component';

import { LoginComponent } from './index/user/auth/login/login.component';
import { RegisterComponent } from './index/user/auth/register/register.component';

import { HomeComponent } from './index/user/home/home.component';
import { ShopComponent } from './index/user/shop/shop.component';
import { ViewProductComponent } from './index/user/shop/view-product/view-product.component';

import { AboutUsComponent } from './index/user/about-us/about-us.component';

import { OrderCheckoutComponent } from './index/user//my-cart/order-checkout/order-checkout.component';

import { MyCartComponent } from './index/user/my-cart/my-cart.component';





import { ProfileAccComponent } from './index/user/profile-acc/profile-acc.component';

/*import { PurchaseComponent } from './profile-acc/purchase/purchase.component';*/
import { OrdersComponent } from './index/admin/orders/orders.component';
import { IndexComponent } from './index/index.component';
import { ProductsComponent } from './index/admin/products/products.component';

const routes: Routes = [


  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login', component: LoginComponent

  },
  {
    path: 'register', component: RegisterComponent

  },
  {
    path: 'home', component: IndexComponent, children:
      [
        { path: '', component: HomeComponent },
      ]
  },
  {
    path: 'product', component: AdminComponent, children:
      [
        { path: '', component: ProductsComponent },
      ]
  },
  {
    path: 'order', component: AdminComponent, children:
      [
        { path: '', component: OrdersComponent },
      ]
  },
  {
    path: 'aboutus', component: IndexComponent, children:
      [
        { path: '', component: AboutUsComponent },
      ]
  },
  {
    path: 'shop', component: IndexComponent, children:
      [
        { path: '', component: ShopComponent },
      ]
  },
  {
    path: 'view-product', component: IndexComponent, children:
      [
        { path: '', component: ViewProductComponent },
      ]
  },
  {
    path: 'my-cart', component: IndexComponent, children:
      [
        { path: '', component: MyCartComponent },
      ]
  },

  {
    path: 'check-out', component: IndexComponent, children:
      [
        { path: '', component: OrderCheckoutComponent },
      ]
  },
  {
    path: 'profile', component: IndexComponent, children:
      [
        { path: '', component: ProfileAccComponent },
      ]
  },
  {
    path: 'admin', component:  AdminComponent, children:
      [
        { path: '', component: DashboardComponent },
      ]
  },


  //{ path: oes + '/home', component: HomeComponent },
  //{ path: oes + '/login', component : LoginComponent},
  //{ path: oes + '/register', component : RegisterComponent},
  //{ path: oes + '/home', component : HomeComponent},
  //{ path: oes + '/shop', component : ShopComponent},
  //{ path: oes + '/product-details/buy-now', component : BuyNowComponent},
  //{ path: oes + '/product-details/add-to-cart', component : AddToCartComponent},
  //{ path: oes + '/product-details', component : ViewProductComponent},
  //{ path: oes + '/my-cart', component : MyCartComponent},
  //{ path: oes + '/my-cart/order-checkout', component : OrderCheckoutComponent},
  //{ path: oes + '/profile', component: ProfileAccComponent },

  /*{ path: oes + '/purchases', component : PurchaseComponent},*/

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

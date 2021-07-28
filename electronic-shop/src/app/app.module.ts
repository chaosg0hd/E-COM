import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//App Components

import { HomeComponent } from './index/user/home/home.component';
import { ShopComponent } from './index/user/shop/shop.component';
import { ViewProductComponent } from './index/user/shop/view-product/view-product.component';

import { MyCartComponent } from './index/user/my-cart/my-cart.component';

import { AdminComponent } from './index/admin/admin.component';
import { DashboardComponent } from './index/admin/dashboard/dashboard.component';


//import { DeliveryComponent } from './delivery/delivery.component';

import { LoginComponent } from './index/user/auth/login/login.component';
import { RegisterComponent } from './index/user/auth/register/register.component';

//import { MyCartComponent } from './my-cart/my-cart.component';

import { OrderCheckoutComponent } from './index/user/my-cart/order-checkout/order-checkout.component';


import { ProfileAccComponent } from './index/user/profile-acc/profile-acc.component';

//import { PurchaseHistoryComponent } from './profile-acc/purchase-history/purchase-history.component';
//import { EditProfileComponent } from './profile-acc/edit-profile/edit-profile.component';
//import { MyAddressComponent } from './profile-acc/my-address/my-address.component';
//import { AddAddressComponent } from './profile-acc/my-address/add-address/add-address.component';
//import { EditAddressComponent } from './profile-acc/my-address/edit-address/edit-address.component';



//Font Awesome
//To add Later
/*import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';*/

//Calender Module

import { DatePipe } from '@angular/common';

//import { FlatpickrModule } from 'angularx-flatpickr';
//import { CalendarModule, DateAdapter } from 'angular-calendar';
//import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
//import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

//Material Modules

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material Navigation

import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

// Material Layout

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';

// Material Buttons & Indicators

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';

// Material Popups & Modals

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

// Material Data tables

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';


/*import { ProfileAccComponent } from './profile-acc/profile-acc.component';*/

/*import { PurchaseComponent } from './profile-acc/purchase/purchase.component';*/

import { IndexComponent } from './index/index.component';
import { AboutUsComponent } from './index/user/about-us/about-us.component';
import { OrdersComponent } from './index/admin/orders/orders.component';
import { ProductsComponent } from './index/admin/products/products.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    OrdersComponent,
    LoginComponent,
    RegisterComponent,
    

    HomeComponent,
    ShopComponent,
    ViewProductComponent,

    MyCartComponent,

    ProfileAccComponent,
    ProductsComponent,
    AdminComponent,
    DashboardComponent,
    AboutUsComponent,    

    //DeliveryComponent,   
    
    //BuyNowComponent,
    //AddToCartComponent,
    OrderCheckoutComponent,
    
    ///*PurchaseComponent,*/
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,


    // Material Cons Imports

    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

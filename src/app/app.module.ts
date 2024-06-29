import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AddbikeComponent } from './addbike/addbike.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserlistComponent } from './userlist/userlist.component';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { BookbikeComponent } from './bookbike/bookbike.component';
import { HttpClientModule } from '@angular/common/http';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { AllbikesComponent } from './allbikes/allbikes.component';
import { BookingsComponent } from './bookings/bookings.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TermsComponent } from './terms/terms.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AllproductsComponent,
    SigninComponent,
    SignupComponent,
    AddbikeComponent,
    AdminhomeComponent,
    UserlistComponent,
    BookinghistoryComponent,
    UserhomeComponent,
    BookbikeComponent,
    ForgotpasswordComponent,
    RoutingComponents,
    AllbikesComponent,
    BookingsComponent,
    UserprofileComponent,
    AdminprofileComponent,
    AboutusComponent,
    TermsComponent,
    ContactusComponent,
    
  ],
  imports: [
    BackButtonDisableModule.forRoot({
      preserveScrollPosition: true
    }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


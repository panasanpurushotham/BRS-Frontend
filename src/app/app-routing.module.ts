import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AddbikeComponent } from './addbike/addbike.component';
import { BookbikeComponent } from './bookbike/bookbike.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AuthGuard } from './auth.guard';
import { AllbikesComponent } from './allbikes/allbikes.component';
import { BookingsComponent } from './bookings/bookings.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TermsComponent } from './terms/terms.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
  {path:'',
  component:HomepageComponent
  },
  {path:'signin',
  component:SigninComponent
  },
  {path:'signup',
  component:SignupComponent
  },
  {path:'userhome',
  component:UserhomeComponent
  },
  {path:'allproducts',
  component:AllproductsComponent
  },
  {path:'bookbike/:id',
  component:BookbikeComponent
  },
  
  {path:'bookinghistory',
  component:BookinghistoryComponent
  },
 
  {path:'adminhome',
  canActivate:[AuthGuard],
  component:AdminhomeComponent
  },
  {path:'userlist',
  component:UserlistComponent
  },
  {path:'forgotpassword',
  component:ForgotpasswordComponent
  },
  {path:'addbike',
  component:AddbikeComponent
  },
  {path:'allbikes',
  component:AllbikesComponent
  },
  {path:'bookings',
  component:BookingsComponent
  },
  {path:'userprofile',
  component:UserprofileComponent
  },
  {path:'adminprofile',
  component:AdminprofileComponent
  },
  {path:'aboutus',
  component:AboutusComponent
  },
  {path:'terms',
  component:TermsComponent
  },
  {path:'contactus',
  component:ContactusComponent
  },
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents=[HomepageComponent,AdminhomeComponent]

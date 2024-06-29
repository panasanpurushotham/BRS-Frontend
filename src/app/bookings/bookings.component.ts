import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  // itemId:any;
 data: any;

  constructor(private us:UserserviceService) {
    this.viewBookings();
   }

  ngOnInit(): void {
    let resp=this.us.getid();
    resp.subscribe((data)=>this.bookings=data);
  }
  bookings:any
  viewBookings(){
    this.us.viewBookings().subscribe((result:any)=>{this.bookings=result})
  }
  // deleteData(data:any){
  //   this.us.deleteBooking(data.value).subscribe();
  //   alert("Booking Deleted")
  // }
  deleteData(data:any){
    const d={"id":data}
    this.us.deleteBooking(d).subscribe();
    alert("Booking Deleted")
  }
  updateBike(update:any){
    this.us.updateBike(update.value).subscribe();
  }

}

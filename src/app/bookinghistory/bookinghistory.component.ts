import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';


@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.css']
})
export class BookinghistoryComponent implements OnInit {

  constructor(private us:UserserviceService) { 
  const user = localStorage.getItem('currentUser');
  
  var currentUser = JSON.parse(user?user:"");
  var token = currentUser.userid;
  
    this.us.viewBooking({"userid":token}).subscribe((result:any)=>{this.booking=result});
    
   }


  ngOnInit(): void {
  }
  booking:any

 
  deleteData(data:any){
    const d={"id":data}
    this.us.deleteBooking(d).subscribe();
    alert("Bike Deleted")
  }
  // deleteData(data:any){

  
  //   this.us.deleteBooking(data.value).subscribe();
  //   alert("Bike Deleted")
    
  // }
  // updateBike(update:any){
  //   this.us.updateBike(update.value).subscribe();
  // }

}

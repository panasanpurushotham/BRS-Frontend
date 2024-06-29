import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookbike',
  templateUrl: './bookbike.component.html',
  styleUrls: ['./bookbike.component.css']
})
export class BookbikeComponent implements OnInit {
  profile: any;
  product: any;
  id!: number;


  bikeBooked(booking: any) {
    alert("Bike Booked!!")
  }
  constructor(private us: UserserviceService,
    private activatedRoute: ActivatedRoute) {
    // this.viewBikes();
    const user = localStorage.getItem('currentUser');
    var currentUser = JSON.parse(user ? user : "");
    var token = currentUser.userid;
    this.us.viewProfile({ "id": token }).subscribe((result: any) => { this.profile = result });


    // const bike = localStorage.getItem('currentBike');
    // var currentBike = JSON.parse(bike?bike:"");
    // var token1 = currentBike.bikeid;
    // this.us.viewProduct(token1).subscribe((result:any)=>{this.product=result})
  }


  insertData1(insert: any) {
    //document.write(insert.value);
    var user = localStorage.getItem('currentUser');
    var currentUser = JSON.parse(user ? user : "1");
    var token = currentUser.userid;
    insert.value["userid"] = token;
    this.us.insertData1(insert.value).subscribe();
  }
  ngOnInit(): void {
    //reading id given in the ListComponent onclick of EDIT Button
    this.id = this.activatedRoute.snapshot.params['id'];

    this.us.getBikeDetail(this.id).subscribe((data) => {
      this.product = data;
      console.log(data);
    });
}


}

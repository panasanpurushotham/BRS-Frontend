import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-addbike',
  templateUrl: './addbike.component.html',
  styleUrls: ['./addbike.component.css']
})
export class AddbikeComponent implements OnInit {
  bikeData: any;

  constructor(private us:UserserviceService) { }

  insertBike(insert:any){
    this.us.insertBike(insert.value).subscribe();
    alert("Bike Added")
  }

  ngOnInit(): void {
  }

  


}

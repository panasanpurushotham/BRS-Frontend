import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-allbikes',
  templateUrl: './allbikes.component.html',
  styleUrls: ['./allbikes.component.css']
})
export class AllbikesComponent implements OnInit {

  constructor(private us:UserserviceService) { 
  this.viewBikes();
  }

  ngOnInit(): void {
  }
  bikes:any
  viewBikes(){
    this.us.viewBikes().subscribe((result:any)=>{this.bikes=result})
  }
  deleteBike(data:any){
    const d={"id":data}
    this.us.deleteBike(d).subscribe();
    alert("Bike Deleted")
  }
}

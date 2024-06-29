import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  
  id: any;
  

  constructor(private us:UserserviceService,
    private router: Router) { 
  this.viewBikes();
  }
  
  

  ngOnInit(): void { }
  

  
  bikes:any
  viewBikes(){
    this.us.viewBikes().subscribe((result:any)=>{this.bikes=result})
  }
  // submit1(){
  //   localStorage.setItem('currentBike', JSON.stringify({ bikeid:this.id?.value }));
  //   this.router.navigate(['/bookbike']);
  // }
  book(id:number){
    this.router.navigate(['/bookbike',id]);
  }

}

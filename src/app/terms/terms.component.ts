import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  constructor(private us:UserserviceService) { }

  ngOnInit(): void {
  }
  updateUser(update:any){
    this.us.updateUser(update.value).subscribe();
    alert("User Updated")
  }
  
  
}

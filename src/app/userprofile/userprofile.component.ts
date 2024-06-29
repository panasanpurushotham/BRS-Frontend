import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  profile: any;

  constructor(private us:UserserviceService) {
    const user = localStorage.getItem('currentUser');
    var currentUser = JSON.parse(user?user:"");
    var token = currentUser.userid;

    this.us.viewProfile({"id":token}).subscribe((result:any)=>{this.profile=result});
   }

  ngOnInit(): void {
  }
  // viewUser(data:any){
  //   this.us.viewUser(data.value).subscribe((result:any)=>{this.user=result});
  // }

}

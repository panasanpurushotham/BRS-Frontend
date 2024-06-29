import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  profile:any;

  constructor(private us:UserserviceService) {
    const user = localStorage.getItem('currentUser');
    var currentUser = JSON.parse(user?user:"");
    var token = currentUser.userid;

    this.us.viewProfile({"id":token}).subscribe((result:any)=>{this.profile=result});
   }

  ngOnInit(): void {
  }
  updateData(update:any){
    this.us.updateData(update.value).subscribe();
    alert("Data Updated")
  }

}

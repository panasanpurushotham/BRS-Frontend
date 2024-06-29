import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
delete: any;

  constructor(private us:UserserviceService,
    private router: Router) { 
    this.viewusers();
  }

  ngOnInit(): void {
  }
  users:any
  viewusers(){
    this.us.viewusers().subscribe((result:any)=>{this.users=result})
  }
  deleteUser(data:any){
    const d={"id":data}
    this.us.deleteUser(d).subscribe();
    alert("User Deleted")
  }
  
  updateUser(update:any){
    this.us.updateUser(update.value).subscribe();
    alert("User Updated")
  }
  navigateToReceiver(id: number) {
  this.router.navigate(['/terms', id]);
}



}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userForm!: FormGroup;
  user: any;




  constructor(
    private service: UserserviceService,
    private builder: FormBuilder,
    private router: Router
  ) { }

  // createUser(insert:any){
  //   this.us.insertData(insert.value).subscribe();
  //   this.us.getid().subscribe((result:any)=>{this.user=result;
  //   alert("Please note your User ID: "+(result.id+1))});
  // }

  ngOnInit() {
      this.userForm = this.builder.group({
        name: [
          '',
          [Validators.required, Validators.pattern('^[a-zA-Z]*$')],
        ],

        mob: [
          '',
          [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')],
        ],

        birth: [
          '',
          [Validators.required],
        ],
        
        gender: [
          '',
          [Validators.required, Validators.pattern('^[a-zA-Z]*$')],
        ],

        email: ['', [Validators.required, Validators.email]],
        
        psw: [
          '',
          [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')],
        ],
      });
  }

  // createUser() {
  //   if (this.userForm.valid) {
  //     this.service.insertData(this.userForm.value).subscribe((data) => {
  //       console.log(data);
  //     });
  //     this.service.getid().subscribe((result:any)=>{this.user=result;
  //     alert("Please note your User ID: "+(result.id+1))});
  //     this.router.navigateByUrl('/signin');
  //   } else {
  //     console.log(this.userForm.value)
  //   }
  // }

  createUser() {
    if (this.userForm.valid) {
      this.service.insertData(this.userForm.value).subscribe((data) => {
        console.log(data);
      });
      this.service.getid().subscribe((result:any)=>{this.user=result;
      alert("Registration Successfull")});
      this.router.navigateByUrl('/signin');
    } else {
      console.log(this.userForm.value)
    }
}

  

}

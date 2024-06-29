import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  loginForm!: FormGroup;

  constructor(private router: Router,
    private builder: FormBuilder,
    private ps: UserserviceService,
  ) { }

  players: any;

  ngOnInit() {
    this.loginForm = this.builder.group({
      id: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      psw: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    });
  }
  login(insert: any) {
    console.log(this.loginForm);
  }
  get id() {
    return this.loginForm.get('id');
  }
  get psw() {
    return this.loginForm.get('psw');
  }
  get email(){
    return this.loginForm.get('email');
  }


  submit() {
    // if (this.id?.value?.length == 0 || this.psw?.value?.length == 0 || this.id?.invalid || this.psw?.invalid) {
    //   alert("Enter Valid Details");
    if (this.email?.value?.length == 0 || this.psw?.value?.length == 0 || this.email?.invalid || this.psw?.invalid) {
        alert("Enter Valid Details");
    }
    else if (this.email?.value == 'admin@gmail.com' && this.id?.value == '1' && this.psw?.value == 'admin123') {
      alert("Successfully Logged in")
      this.router.navigate(['/adminhome']);
    }
    else {
      this.ps.getuser(this.loginForm.value).subscribe(
        data => {
          this.ps.getuser(this.loginForm.value).subscribe()
          localStorage.setItem('currentUser', JSON.stringify({ userid: this.id?.value }));


          alert("Successfully Logged in")
          this.router.navigate(['/userhome']);
        },
        error => {
          alert
            ("Invalid Credential");


        }

      );
    }
  }
  submit1() {
    localStorage.setItem('currentUser', JSON.stringify({ userid: this.id?.value }));
    this.router.navigate(['/forgotpassword']);
  }
}

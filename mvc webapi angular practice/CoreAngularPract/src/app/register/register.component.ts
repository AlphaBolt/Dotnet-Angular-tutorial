import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../Service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private userservice : UsersService, private router : Router){}
  
  registerForm = new FormGroup({
    Username : new FormControl(''),
    Password : new FormControl(''),
    Email : new FormControl(''),
    PhoneNo : new FormControl('')
  });


  createUser() : void
  {
    this.userservice.SignUpUser(this.registerForm.value).subscribe(res => {
      console.log("User created");
      // this.router.navigate(['\Signin']);


    }, err => {
      console.log("Error while registering!!!");
    })
  }

}

import { Component } from '@angular/core';
import { UsersService } from '../Service/users.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private userservice : UsersService, private router : Router){}

  signinForm =   new FormGroup({
    Username : new FormControl(''),
    Password : new FormControl('')
  });

  signinUser() : void
  {
    this.userservice.SignInUser(this.signinForm.value).subscribe(res => {
      if(res == 1)
      {
        // Maintaining session storage for component guard
        let username : any = this.signinForm.value.Username;
        sessionStorage.setItem("User", username);

        console.log("Signed in successfully!");
        
        sessionStorage.setItem("status", "Signed in successfully!");
        // After redirecting to AccountDashboard, reload the page to see changes in the navigation bar
        this.router.navigate(['\AccountDashboard']).then(() => {
          window.location.reload();
        });
      }
      else
      {
        console.log("Wrong credentials!!!");
      }
    }, err => {
      console.log("Error while signing in!!!");
    })
  }


}

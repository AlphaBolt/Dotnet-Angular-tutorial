import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title = 'CoreAngularPract';
  User : any;
  
  constructor(private router : Router)
  {
    this.User = sessionStorage.getItem("User");
    console.log(this.User);
  }

  logout() : void
  {
    this.User = null;
    sessionStorage.removeItem("User");
    this.router.navigate(['\Signin']);
  }
  
}

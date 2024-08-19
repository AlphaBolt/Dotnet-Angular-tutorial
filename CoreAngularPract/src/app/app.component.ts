import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersService } from './Service/users.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CoreAngularPract';
  result : any;
  constructor(private userservice : UsersService){}


  getUsers() : void
  {
    this.userservice.GetUsersList().subscribe(res => {
      this.result = res;
    }, err => {
      console.log("Error while fetching api!!!");
    })
  }

}

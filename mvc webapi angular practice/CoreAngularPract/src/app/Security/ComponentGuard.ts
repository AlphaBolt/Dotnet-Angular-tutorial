import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { UsersService } from '../Service/users.service';


@Injectable({
  providedIn: 'root'
})

export class ComponentGuard implements CanActivate
{
    constructor(private userservice : UsersService, private router : Router){}

    canActivate(): boolean
    {
        if(!this.userservice.Func2GetSessionStorage())
        {
            this.router.navigate(['\Signin']);
            return false;
        }
        else
        {
            return true;
        }
    }

}
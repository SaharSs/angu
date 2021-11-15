import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { ShService } from './sh.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  constructor(private router:Router,private as:AuthService,private sh:ShService) { }
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |
   Observable<boolean> | Promise<boolean> 
{
  return new Promise(resolve => {
    this.as.df.subscribe(user => {
      if (user) {
        this.sh.getUserData().subscribe(data => {
          if (data['role']=='admin') resolve(true);
          else {
            this.router.navigate(['/'])
            resolve(false)
          }
        })
      }
      else {
        this.router.navigate(['/'])
        resolve(false)
      }
    })
  })
}

}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ShService } from '../services/sh.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isuser:any;
isAdmin:any;
userData:any
  constructor(private fs:AngularFireAuth,private route:Router,
    public as:AuthService,private sh:ShService) {
  
    this.as.df.subscribe((data) => {
      if (data) {
        
        this.isuser = true;
        this.as.use = data.uid;
      localStorage.setItem('user', this.as.use);
      this.sh.getUserData().subscribe(data => {
        if (data['role']=='admin')
         {
           console.log(data['role'])
          this.isAdmin = true;
        }
        else{
          this.isAdmin = false;
        }
      })  
       
      } else {
        this.isuser = false;
        this.as.use= '';
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })

      }
  

  ngOnInit(): void {
  }
  logout(){
  
  
    this.fs.signOut().then(()=>{
      
      localStorage.removeItem('user');
      localStorage.removeItem('sl')
   
      this.route.navigate(['/login']);
      window.location.reload();
    
    });
    
  }

} 


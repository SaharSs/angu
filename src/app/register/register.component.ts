import { Component, OnInit } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private as:AuthService,private fs:AngularFirestore,private route:Router) { }

  ngOnInit(): void {

  }
  register(f:any){
    let data=f.value;
    this.as.signup(data.email,data.password).then((dat)=>{
      this.fs.collection('users').doc(dat.user.uid).set(   { 
        flName:data.flName,
        email:data.email,
        adress:data.adress,
        role:data.role,
        uid:dat.user.uid,
        password:data.password
        
             }).then(()=>{

              this.route.navigate(['/'])
            })
          

    
    }).catch(()=>{
      console.log("error !")
    })
    

  }

}

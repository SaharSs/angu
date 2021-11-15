import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(private as:AuthService,private route:Router,private fs:AngularFirestore) {
    
   }
   datap={
    flName:" ",
    
    
    role:" " ,
    adress:" "
  }
  
  ngOnInit(): void {
  }
  login(f:any){
  let data=f.value;
  this.as.signin(data.email,data.password).then((dat)=>{
    console.log(dat);
   
  localStorage.setItem("sl",dat.user.uid);

})
this.fs.collection('users').ref.doc(localStorage.getItem('sl')).get().then(data=>{
  console.log(data.data());
    this.datap.flName=data.data()['flName'],
    
    this.datap.role=data.data()["role"];
    this.datap.adress=data.data()["adress"];
    localStorage.setItem( "ls",this.datap.flName);
    localStorage.setItem( "gt",this.datap.adress);
    localStorage.setItem( "vs",this.datap.role);
     })
     this.route.navigate(['/']);
  }
   
}

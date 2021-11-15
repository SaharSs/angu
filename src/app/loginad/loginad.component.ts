
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loginad',
  templateUrl: './loginad.component.html',
  styleUrls: ['./loginad.component.css']
})
export class LoginadComponent implements OnInit {

  constructor(private as:AuthService,private fs:AngularFirestore,private route:Router) { }
  datap={
    flName:"",


    role:"" ,
    adress:""
  }
  ngOnInit(): void {
  }
  loginad(f:any){
    let data=f.value;
    this.as.signin(data.email,data.password).then((dat)=>{
      console.log(dat);
    localStorage.setItem("ks",dat.user.uid);
  
    this.route.navigate(['/']);
})
  
  }

}

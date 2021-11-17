
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loginad',
  templateUrl: './loginad.component.html',
  styleUrls: ['./loginad.component.css']
})
export class LoginadComponent implements OnInit {

  constructor(private as:AuthService,private fst:AngularFireAuth,private fs:AngularFirestore,private route:Router) { }
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
    localStorage.setItem("sl",dat.user.uid);
  
 this.fs.collection('users').ref.doc(localStorage.getItem('sl')).get().then(data=>{
      console.log(data.data());
        this.datap.flName=data.data()['flName'],
        
        this.datap.role=data.data()["role"];
        this.datap.adress=data.data()["adress"];
        localStorage.setItem( "ls",this.datap.flName);
        localStorage.setItem( "gt",this.datap.adress);
        localStorage.setItem( "vs",this.datap.role);
        if( data.data()["role"]==="user"){
          this.fst.signOut().then(()=>{
            localStorage.removeItem('sl');
            localStorage.removeItem('user');
            localStorage.removeItem('ls');
            localStorage.removeItem('gt');
            localStorage.removeItem('vs');
            this.route.navigate(['/loginad']);
            window.location.reload();

            
           
          
          });
          
        }else{
          
          this.route.navigate[('/')]
          
         
        
        }
         })
        
        
      
        
    
})

  }

}

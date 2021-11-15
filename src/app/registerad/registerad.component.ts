import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registerad',
  templateUrl: './registerad.component.html',
  styleUrls: ['./registerad.component.css']
})
export class RegisteradComponent implements OnInit {

  constructor(private as:AuthService,private fs:AngularFirestore,private route:Router ) { }

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
      
        password:data.password
        
             }).then(()=>{

              this.route.navigate(['/loginad'])
            })
          

    
    })
    

  }


}

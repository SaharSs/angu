import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-up-c',
  templateUrl: './up-c.component.html',
  styleUrls: ['./up-c.component.css']
})
export class UpCComponent implements OnInit {

  
  keyParams
  datauser={
    flName:'',
    email:'',
    password:'',
    role:'',
    adress:''
    
  }
  successUpdate:string=""
  
  
    constructor(private fs:AngularFirestore,private parms:ActivatedRoute,private route:Router) { 
      this.parms.params.subscribe(query=>{
        return this.keyParams=query.key
      })
    }
      ngOnInit(): void {
        this.fs.collection('users').ref.doc(this.keyParams).get().then(data=>{
          console.log(data.data())
    
          this.datauser.flName=data.data()['flName']
          this.datauser.email=data.data()['email']
          this.datauser.password=data.data()['password']
          this.datauser.role=data.data()['role']
          this.datauser.adress=data.data()['adress']
        })
    
      }
      update(){
        this.fs.collection("users").doc(this.keyParams).update({
          flName:this.datauser.flName,
          email:this.datauser.email,
          password:this.datauser.password,
          role:this.datauser.role,
          adress:this.datauser.adress
        }).then(()=>{
          this.successUpdate="updated!"
         this.route.navigate(["ad-client"])
       
        })
       
        
      }
      
    
    

}

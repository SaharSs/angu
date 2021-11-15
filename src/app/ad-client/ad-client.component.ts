import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ShService } from 'src/app/services/sh.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-ad-client',
  templateUrl: './ad-client.component.html',
  styleUrls: ['./ad-client.component.css']
})
export class AdClientComponent implements OnInit {

  constructor(private fs:AngularFirestore,private as:AuthService,private sh:ShService,private route:Router,private fst:AngularFireStorage) { }

 
  dataArray:any
  y:any;
  ngOnInit(): void {
    this.fs.collection("users").snapshotChanges().subscribe((data)=>{
      this.dataArray= data.map(element=>{
        return{ 
          id:element.payload.doc.id ,
         flName:element.payload.doc.data()['flName'],
          role:element.payload.doc.data()['role'],
          email:element.payload.doc.data()['email'],
          adresse:element.payload.doc.data()['adresse'],
          password:element.payload.doc.data()['password']
      
       }
       })
      

     })
  
  }

  updatec(id:any){
    this.route.navigate(['/ad-client/'+id])
   
  }
  delete(id:any){
    if (confirm('Are you sure?')){
    this.fs.collection("users").doc(id).delete()
  }
  }
  addNewuser(f:NgForm) {
    let data=f.value;
    this.as.signup(data.email,data.password).then((dat)=>{
      this.fs.collection('users').doc(dat.user.uid).set({ 
        flName:data.flName,
        email:data.email,
        adress:data.adress,
        role:data.role,
        password:data.password
        
      }).then(()=>{
        localStorage.setItem('sl',dat.user.uid)
        localStorage.setItem('ls',data.flName)
        localStorage.setItem('gt',data.adress)
this.route.navigate(['/'])
      })
    })

   
  	}





}

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ShService } from '../services/sh.service';

@Component({
  selector: 'app-ad-orders',
  templateUrl: './ad-orders.component.html',
  styleUrls: ['./ad-orders.component.css']
})
export class AdOrdersComponent implements OnInit {

  constructor(private fs:AngularFirestore,private sh:ShService,private route:Router) { }

 
  dataArray:any
  ngOnInit(): void {
  
  this.fs.collection("orders").snapshotChanges().subscribe((data)=>{
    this.dataArray= data.map(element=>{
      return{ 
        id:element.payload.doc.id ,
       name:element.payload.doc.data()['name'],
        total:element.payload.doc.data()['total'],
      
        adress:element.payload.doc.data()['adress'],
        date:element.payload.doc.data()['date'],
        uid:element.payload.doc.data()['uid']
    
     }
     })
    

   })

  }
  delete(id:any){
    if (confirm('Are you sure?')){
    this.fs.collection("orders").doc(id).delete()
  }
  }
  updateo(id:any){
    this.route.navigate(['/ad-orders/'+id])
   
  }
  addNewo(f:NgForm) {
    let name = (f.value).name,
    total = (f.value).total,
    adress=(f.value).adress,
    uid=(f.value).uid
    
   
    
    this.sh.addNewo(name,total,adress,uid);
      
  }

}

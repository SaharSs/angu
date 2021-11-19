import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ShService } from '../services/sh.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  keyParams:string
  constructor(private parms:ActivatedRoute,private cs:ShService,
    private as:AuthService,private fs:AngularFirestore ,private route:Router ) {
    this.parms.params.subscribe(query=>{
      return this.keyParams=query.key
    })
   }
l:any
n:Date

  ngOnInit(): void {
    console.log(this.keyParams)
 
      this.fs.collection('orders').snapshotChanges().subscribe((data)=>{
       console.log(data)
      console.log(JSON.parse(localStorage.getItem('sf')))
       this.n=JSON.parse(localStorage.getItem('sf'))
      this.l=data.map(ele=>{
       return{
            id:ele.payload.doc.id,
            name:ele.payload.doc.data()['name'],
            adress:ele.payload.doc.data()['adress'],
            total:ele.payload.doc.data()['total'],
            uid:ele.payload.doc.data()['uid'],
            date:ele.payload.doc.data()['date']
           }
        
        })
        
      });
    
  }
  activate(id:any){
    this.route.navigate(['/shopping/id/'+id])
   
  }
   

}

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-upo',
  templateUrl: './upo.component.html',
  styleUrls: ['./upo.component.css']
})

export class UpoComponent implements OnInit {
  keyParams:any
  datao={
    name:'',
    total:'',
    adress:'',
    date:''
    }
  successUpdate:string=""
  constructor(private fs:AngularFirestore,private parms:ActivatedRoute,private route:Router) { 
    this.parms.params.subscribe(query=>{
      return this.keyParams=query.key
    })
  }

  ngOnInit(): void {
    this.fs.collection("orders").ref.doc(this.keyParams).get().then(data=>{
      console.log(data.data())
      this.datao.name=data.data()['name']
      this.datao.total=data.data()['total']
      this.datao.adress=data.data()['adress']
      this.datao.date=data.data()['date']
      });
}
updat(){
  this.fs.collection("orders").doc(this.keyParams).update({
    name:this.datao.name,
    total:this.datao.total,
    adress:this.datao.adress,
    date:this.datao.date
  }).then(()=>{
    console.log(this.datao.name);
    this.successUpdate="updated!"
    this.route.navigate(['ad-orders'])
 
  })
 }
}
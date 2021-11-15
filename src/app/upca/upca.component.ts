import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-upca',
  templateUrl: './upca.component.html',
  styleUrls: ['./upca.component.css']
})
export class UpcaComponent implements OnInit {
  keyParams:any
  dataProduct={
    categories:'',
  }
  successUpdate:string=""
  
  constructor(private fs:AngularFirestore,private parms:ActivatedRoute,
    private route:Router) { 
    this.parms.params.subscribe(query=>{
      return this.keyParams=query.key
    })
  }

  ngOnInit(): void {
    this.fs.collection('categories').ref.doc(this.keyParams).get().then(data=>{
      console.log(data.data())
       this.dataProduct.categories=data.data()['categories']
    
    })
    
  }


update(){
  this.fs.collection("categories").doc(this.keyParams).update({
    
    categories:this.dataProduct.categories,
   
  }).then(()=>{
    this.successUpdate="updated!"
   this.route.navigate(["categories"])
 
  })
 
  
}
}
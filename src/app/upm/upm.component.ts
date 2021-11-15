import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-upm',
  templateUrl: './upm.component.html',
  styleUrls: ['./upm.component.css']
})
export class UpmComponent implements OnInit {
  keyParams:any
  dataProduct={
  
    mark:''
    
  }
  successUpdate:string=""
  
  constructor(private fs:AngularFirestore,private parms:ActivatedRoute,
    private route:Router) {
      this.parms.params.subscribe(query=>{
        return this.keyParams=query.key
      })
     }

  ngOnInit(): void {
    this.fs.collection('mark').ref.doc(this.keyParams).get().then(data=>{
      console.log(data.data())
       this.dataProduct.mark=data.data()['mark']
    
    })
  }

  update(){
    this.fs.collection("mark").doc(this.keyParams).update({
      
      mark:this.dataProduct.mark,
     
    }).then(()=>{
      this.successUpdate="updated!"
     this.route.navigate(["mark"])
   
    })
   
    
  }
}


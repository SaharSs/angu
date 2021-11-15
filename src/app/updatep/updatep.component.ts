import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatep',
  templateUrl: './updatep.component.html',
  styleUrls: ['./updatep.component.css']
})

export class UpdatepComponent implements OnInit {
  kl:any
  dll:any
  keyParams:any
  dataProduct={
    title:'',
    categories:'',
    description:'',
    qte:'',
    price:'',
    np:'',
    offer:'',
    offerv:'',
    offf:'',
    mark:''
    
  }
  successUpdate:string=""

  constructor(private fs:AngularFirestore,private parms:ActivatedRoute,private route:Router) { 
    this.parms.params.subscribe(query=>{
      return this.keyParams=query.key
    })
  }

  ngOnInit(): void {
    this.fs.collection('products').ref.doc(this.keyParams).get().then(data=>{
      console.log(data.data())

      this.dataProduct.title=data.data()['title']
      this.dataProduct.categories=data.data()['categories']
      this.dataProduct.description=data.data()['description']
      this.dataProduct.qte=data.data()['qte']
      this.dataProduct.price=data.data()['price']
      this.dataProduct.np=data.data()['np']
      this.dataProduct.offer=data.data()['offer']
      this.dataProduct.offerv=data.data()['offerv']
      this.dataProduct.offf=data.data()['offf']  
   
    })
    this.fs.collection('mark').snapshotChanges().subscribe((data)=>{
      this.kl=data.map(ele=>{
        return{
          id:ele.payload.doc.id,
          mark:ele.payload.doc.data()['mark'],
        }
      })
    })
    this.fs.collection('categories').snapshotChanges().subscribe((data)=>{
      this.dll=data.map(ele=>{
        return{
          id:ele.payload.doc.id,
          categories:ele.payload.doc.data()['categories'],
        }
      })
    })

  }
  update(f:any){
    this.fs.collection("products").doc(this.keyParams).update({
      title:this.dataProduct.title,
      categories:(f.value).catt,
      description:this.dataProduct.description,
      qte:this.dataProduct.qte,
      price:this.dataProduct.price,
      offerv:this.dataProduct.offerv,
      offer:this.dataProduct.offer,
      offf:this.dataProduct.offf,
      mark:(f.value).mark
      

    }).then(()=>{
      this.successUpdate="updated!"
     this.route.navigate(["ad-product"])
   
    })
   
    
  }
  



}

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  keyParams:any
  dataProduct={
    title:'',
    image:'',
    description:'',
    price:'',
    qte:''
  }
constructor(private parms:ActivatedRoute,private fs:AngularFirestore,private route:Router) { 
    this.parms.params.subscribe(query=>{
      return this.keyParams=query.key
    })
  } 
  ngOnInit(): void {
    this.fs.collection('products').ref.doc(this.keyParams).get().then(data=>{
      console.log(data.data())
      this.dataProduct.title=data.data()['title']
      this.dataProduct.image=data.data()['image']
      this.dataProduct.price=data.data()['price']
      this.dataProduct.description=data.data()['description']
      this.dataProduct.qte=data.data()['qte']
    })

  }
  addToCart(){
    this.route.navigate(['/']);
  }
  
}


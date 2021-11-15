import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { ShService } from '../services/sh.service';

@Component({
  selector: 'app-kh',
  templateUrl: './kh.component.html',
  styleUrls: ['./kh.component.css']
})
export class KhComponent implements OnInit {
  searchCategory:any;
  productList:any;
  dataProduct={
    id:'',
    image:'',
    title:'',
    categories:'',
    description:'',
    qte:'',
    price:''
    
  }
  constructor( private activatedRoute: ActivatedRoute,
    private productsService: ShService,private fs:AngularFirestore) { }

  ngOnInit(): void {
  /*  this.activatedRoute.params.subscribe(data => {
      console.log(data.key);
      return this.searchCategory = data.key;
      
    })
  

   
    this.fs.collection(`products/id/${this.searchCategory}`).ref.doc().get().then(data=>{
      console.log(data.data())
      this.dataProduct.id=data.data()['id']
      this.dataProduct.image=data.data()['image']
      this.dataProduct.title=data.data()['title']
      this.dataProduct.categories=data.data()['categories']
      this.dataProduct.description=data.data()['description']
      this.dataProduct.qte=data.data()['qte']
      this.dataProduct.price=data.data()['price']
    })

  }
  


  }*/}
}

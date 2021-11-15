import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {



  constructor(private fs:AngularFirestore, private route:Router) {
    
   }
dtz:any;

  ngOnInit(): void {
    this.fs.collection('products').snapshotChanges().subscribe((data)=>{
      this.dtz=data.map(ele=>{
        return{
          id:ele.payload.doc.id,
          title:ele.payload.doc.data()['title'],
          description:ele.payload.doc.data()['description'],
          Image:ele.payload.doc.data()['image'],
          uid:ele.payload.doc.data()['uid'] 
        }
      })
    })
  }
  detail(id:any)
  {
this.route.navigate(['/products/'+id])
  }

}

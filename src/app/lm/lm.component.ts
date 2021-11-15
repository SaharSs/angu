import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { ShService } from '../services/sh.service';

@Component({
  selector: 'app-lm',
  templateUrl: './lm.component.html',
  styleUrls: ['./lm.component.css']
})
export class LmComponent implements OnInit {
  categoryList:any
  products: any[]=[];
  flp: any[]=[];
  categories:string='';
  constructor(private sh:ShService,private route: ActivatedRoute,private fs:AngularFirestore) { }

  ngOnInit(): void {
   /* this.sh.getCategories().subscribe(data => {
      this.categoryList = data.map((shopping) => {
        return {
         id: shopping.payload.doc.id,
         categories:shopping.payload.doc.data()['categories'],
     
        };
       
       });
    });*/
    /*this.sh.getpro().subscribe(pr=>{
      this.products=pr;
this.route.queryParamMap.subscribe(params=>{
this.categories=params.get('categories');
console.log(this.categories)
this.flp=pr.map((shopping) => {
  return {
   id: shopping.payload.doc.id,
   title:shopping.payload.doc.data()['title'],
   qte:shopping.payload.doc.data()['qte'],
   price:shopping.payload.doc.data()['price'] ,
   uid:shopping.payload.doc.data()['yu'],
   np:shopping.payload.doc.data()['np'],
   categories:shopping.payload.doc.data()['categories']
   
 
 };
 
 });


})
    })*/
  }}
  
  


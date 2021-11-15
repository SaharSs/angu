import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private fs:AngularFirestore,private route:Router) { }
kj:any
  ngOnInit(): void {
    this.fs.collection('categories').snapshotChanges().subscribe((data)=>{
      this.kj=data.map(ele=>{
        return{
          id:ele.payload.doc.id,
          categories:ele.payload.doc.data()['categories'],
        }
      })
    })
   
  }
  updatep(id:any){
    this.route.navigate(['/categories/'+id])
   
  }
  delete(id:any){
    if (confirm('Are you sure?')){
    this.fs.collection("products").doc(id).delete()
  }
  }
  
  addcat(j:any){
    let dta=j.value;
    console.log(dta.categories);
    this.fs.collection('categories').add({
    
     categories:dta.categories,
    
    })
  }

  }



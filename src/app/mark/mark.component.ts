import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent implements OnInit {

  constructor(private fs:AngularFirestore,private route:Router) { }
lj:any
  ngOnInit(): void {
    this.fs.collection('mark').snapshotChanges().subscribe((data)=>{
      this.lj=data.map(ele=>{
        return{
          id:ele.payload.doc.id,
          mark:ele.payload.doc.data()['mark'],
        }
      })
    })
   
  }
  addmark(j:any){
    let dta=j.value;
    console.log(dta.mark);
    this.fs.collection('mark').add({
    
     mark:dta.mark,
    
    })
  }
  updatep(id:any){
    this.route.navigate(['/mark/'+id])
   
  }
  delete(id:any){
    if (confirm('Are you sure?')){
    this.fs.collection("products").doc(id).delete()
  }
  }

}

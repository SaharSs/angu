import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ShService } from 'src/app/services/sh.service';

@Component({
  selector: 'app-ad-product',
  templateUrl: './ad-product.component.html',
  styleUrls: ['./ad-product.component.css']
})

export class AdProductComponent implements OnInit {
  task:AngularFireUploadTask
    ref:AngularFireStorageReference
    persentages
    @ViewChild('image', { static: false })
    image: ElementRef
   dataproduct={
     qte:''
   } 
  
dataArray:any
y:any;
kj:any;
kl:any
searchValue: string = "";
results: any;
totalCost:any;
size:any;
np:any=0;
  constructor(private fs:AngularFirestore,private sh:ShService,private route:Router,private fst:AngularFireStorage) { }

  ngOnInit(): void {
    this.fs.collection("products").snapshotChanges().subscribe((data)=>{
      this.size=data.length;
      this.dataArray= data.map(element=>{
         return{ 
          id:element.payload.doc.id,
          title:element.payload.doc.data()['title'],
          description:element.payload.doc.data()['description'],
          image:element.payload.doc.data()['image'],
          qte:element.payload.doc.data()['qte'],
         categories:element.payload.doc.data()['categories'],
         price:element.payload.doc.data()['price'],
         mark:element.payload.doc.data()['mark'],
         percent:element.payload.doc.data()['percent'],
         offer:element.payload.doc.data()['offer'],
         offerv:element.payload.doc.data()['offerv'],
         np:element.payload.doc.data()['np'],
         offf:element.payload.doc.data()['offf']
         }
      })
 
    })     
      
  

     
     
     this.fs.collection('categories').snapshotChanges().subscribe((data)=>{
      this.kj=data.map(ele=>{
        return{
          id:ele.payload.doc.id,
          categories:ele.payload.doc.data()['categories'],
        }
      })
    })
    this.fs.collection('mark').snapshotChanges().subscribe((data)=>{
      this.kl=data.map(ele=>{
        return{
          id:ele.payload.doc.id,
          mark:ele.payload.doc.data()['mark'],
        }
      })
    })
  
  }
  notify(){
    let ki=this.dataArray.filter(e=>e)
    for(let i=0;i<=this.size-1;i++)
    {
      if(ki[i].qte<12){
        var x = document.getElementById("table").getElementsByTagName("tbody");

         x[i].style.backgroundColor = "red";     
      }
    } 
  }
  onChange(f:any){
    let fg=this.dataArray.filter(e=>e)
    let po=f.value
    for(let i=0;i<=this.size-1;i++)
    {
    this.totalCost =  fg[i].price- ((fg[i].price * po.flName) / 100);
    console.log( this.totalCost );
    if(po.flName!='0')
    {
    fg[i].offer='discount';
    fg[i].percent=po.flName;
    fg[i].offf=1;
    fg[i].offerv=0;
    fg[i].np=this.totalCost
    this.fs.doc(`products/${fg[i].id}`).update({
      percent:fg[i].percent,
      offer:fg[i].offer,
      offerv:fg[i].offerv,
      np: fg[i].np,
      offf: fg[i].offf
    })
  }else{
    fg[i].offer='null';
    fg[i].percent=po.flName;
    fg[i].offf=0;
    fg[i].offerv=0;
    fg[i].np=0
    this.fs.doc(`products/${fg[i].id}`).update({
      percent:fg[i].percent,
      offer:fg[i].offer,
      offerv:fg[i].offerv,
      np: fg[i].np,
      offf: fg[i].offf
    })


  }
}



}
  search() {
    let self = this;
    self.results = self.fs.collection(`products`, ref => ref
      .orderBy("categories")
      .startAt(self.searchValue.toLowerCase())
      .endAt(self.searchValue.toLowerCase()+"\uf8ff")
      .limit(10))
      .valueChanges();
  }

  uploadImage(event,lm){
    const id=Math.random().toString(36).substring(2)
    this.ref=this.fst.ref(id)
    this.task=this.ref.put(event.target.files[0])
    this.persentages=this.task.percentageChanges()
    this.task.then((data)=>{
      data.ref.getDownloadURL().then(url=>{
        this.fs.collection("products").doc(lm).update({
          image:url
        }).then(()=>{
          window.location.reload();
        })
      })
    })
}

  updatep(id:any){
    this.route.navigate(['/ad-product/'+id])
   
  }
  delete(id:any){
    if (confirm('Are you sure?')){
    this.fs.collection("products").doc(id).delete()
  }
  }
 
  addNewGood(f:NgForm) {
		  let title = (f.value).title,
			price = (f.value).price,
      description=(f.value).description,
      qte=(f.value).qte,
      categories=(f.value).cat,
      mark=(f.value).mark,
      image = (<HTMLInputElement>this.image.nativeElement).files[0],
      offer=(f.value).offer,
      percent=(f.value).percent,
      offerv=(f.value).offerv,
      offf=(f.value).offf
      console.log(offer);
      if(percent!=="0"  ){
        this.np=price-((price*percent)/100)
        console.log(this.np);
        this.sh.addNewGood(title, price, image,description,categories,mark,qte,offer,percent,offerv,this.np,offf); 
      }else
      {
      this.np=0;
      this.sh.addNewGood(title, price, image,description,categories,mark,qte,offer,percent,offerv,this.np,offf);
      }  
    }

   updateq(id,qte)
    {
    this.fs.collection("products").doc(id).update({
      qte:qte,

})



}

}
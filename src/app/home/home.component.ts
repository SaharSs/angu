import { JsonPipe } from '@angular/common';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

import { title } from 'process';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ShService } from '../services/sh.service';
import { ShoppingComponent } from '../shopping/shopping.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userDoc:AngularFirestoreDocument<any>
  proDoc:AngularFirestoreDocument<any>
  us:Observable<any>
  pro:Observable<any>

  constructor(private sh:ShService,private fs:AngularFirestore, private router:Router,private as:AuthService,
    private route: ActivatedRoute) { }
dtz:any;
term: string;
add: number = -1;
me:string="";
mo:string="";
jh:any;
d:any;
th:any;
nf:any;
uy:any;
markk:any
mark:any;
categories:string='';
categoryList:any;
ProdData: any[] = [];
po:any[]=[]
totallength:any;
page:number=1;
show:any=[]
  ngOnInit(): void {
    this.sh.getCategories().subscribe(data => {
      this.categoryList = data.map((shopping) => {
        return {
         id: shopping.payload.doc.id,
         categories:shopping.payload.doc.data()['categories'],
     
        };
       
       });
    });
    this.sh.getmark().subscribe(data => {
      this.markk = data.map((shopping) => {
        return {
         id: shopping.payload.doc.id,
        mark:shopping.payload.doc.data()['mark'],
     
        };
       
       });
    });
    this.fs.collection('products').snapshotChanges().subscribe((data)=>{
      this.route.queryParamMap.subscribe(params=>{
        this.categories=params.get('categories');
        this.mark=params.get('mark')
         console.log(this.categories)
        
         this.totallength=data.length;
         this.dtz=data.map(ele=>{
        return{
          id:ele.payload.doc.id,
          title:ele.payload.doc.data()['title'],
          description:ele.payload.doc.data()['description'],
          Image:ele.payload.doc.data()['image'],
          price:ele.payload.doc.data()['price'],
          qte:ele.payload.doc.data()['qte'],
          np:ele.payload.doc.data()['np'],
          offer:ele.payload.doc.data()['offer'],
          offerv:ele.payload.doc.data()['offerv'],
          offf:ele.payload.doc.data()['offf'],
          categories:ele.payload.doc.data()['categories'],
          mark:ele.payload.doc.data()['mark'],
          percent:ele.payload.doc.data()['percent']
          
        }
      })
      
    
    })
    
  })
  
     this.m="for two days  ";  
     this.fs.collection('categories').snapshotChanges().subscribe((data)=>{
      this.uy=data.map(ele=>{
        return{
          categories:ele.payload.doc.data()['categories']
        }
      })
    })
   
   // this.ProdData = this.dtz.sort((low, high) => high.Price - low.Price);
    
          }
          
         
        
          sort(event: any) {
            switch (event.target.value) {
              case "Low":
                {
                  this.ProdData = this.dtz.sort((low, high) => low.price - high.price);
                  break;
                }
        
              case "High":
                {
                  this.ProdData =  this.dtz.sort((low, high) => high.price - low.price);
                  break;
                }
        
              case "title":
                {
                  this.ProdData =  this.dtz.sort(function (low, high) {
                    if (low.title < high.title) {
                      return -1;
                    }
                    else if (low.title > high.title) {
                      return 1;
                    }
                    else {
                      return 0;
                    }
                  })
                  break;
                }
        
              default: {
                this.ProdData =  this.dtz.sort((low, high) => low.price - high.price);
                break;
              }
        
            }
            return this.ProdData;
        
          }
        
        
  size:any
  addto(i:any) {

		if (this.as.use) {
			this.add = +i
      this.sh.getCart().subscribe((cart) => {
        this.size=cart.length
        this.cart = cart.map((shopping) => {
           return {
            id: shopping.payload.doc.id,
            title:shopping.payload.doc.data()['title'],
            qte:shopping.payload.doc.data()['qte'],
            price:shopping.payload.doc.data()['price'] ,
            uid:shopping.payload.doc.data()['yu'],
            np:shopping.payload.doc.data()['np']
            
          
          };
          
          });
         
        
           
          
        
          
          
      })
    
this.userDoc=this.fs.doc(`users/${this.as.use}`)
     
    
         
      
      this.proDoc= this.fs.doc(`products/${this.dtz[this.add].id}`) 
    
      this.us=this.userDoc.valueChanges();
      
    
         this.pro=this.proDoc.valueChanges()
		} else {
			this.router.navigate([ '/login' ]);
		}
	}
  get usId() {
    return this.userDoc.ref.id
 }
 get prId(){
  return this.proDoc.ref.id
 }
  cart:any
  h:any;
   m:string;
  buy(qte: number,id:any) {
    let results= this.cart.filter(x => x);

    let selectedGood = this.dtz[this.add];
    localStorage.setItem('de',selectedGood.offer);
    if(selectedGood.offer!="discount"){
    
		let data = {

			title: selectedGood.title,
			qte:+qte,
			price: selectedGood.price,
      yu:selectedGood.id,
      np:selectedGood.np
		};
   localStorage.setItem("er",selectedGood.id);
   localStorage.setItem("md",JSON.stringify (selectedGood.qte));
    if(data.qte!==0 ){
		if(data.qte <= selectedGood.qte) {
     /* selectedGood.qte-=data.qte;
  this.fs.collection("products").doc(data.yu).update({
  qte: selectedGood.qte
  })  */
      localStorage.setItem("uh", selectedGood.qte)
      
localStorage.setItem('oi',selectedGood.id)
  let t;
 
 let m="true";
  console.log(this.size)
for( t=0;t<=this.size-1;t++)
{
if(selectedGood.id===results[t].uid){
  m="false";
  break
  
  }
}
if( m=="true" ){
  
  this.sh.addToCart(data).then(() => (this.add = -1));
  this.router.navigate(['/home/'+id])

 t++
}else{console.log('addition')
console.log(results[t].id)
results[t].qte=results[t].qte+data.qte
this.fs.collection(`users/${this.as.use}/cart`).doc(results[t].id).update({
  
  
  qte:+results[t].qte,
 

})
} 
    
    	}else{
     this.me="less ";
      }
    }else{
      this.mo="empty";
    }
    
      
}else{

  let data = {

    title: selectedGood.title,
    qte:+qte,
    price:selectedGood.price,
    np: selectedGood.np,
    yu:selectedGood.id
  };
 localStorage.setItem("er",selectedGood.id);
 localStorage.setItem("md",JSON.stringify (selectedGood.qte));
  if(data.qte!==0 ){
  if(data.qte <= selectedGood.qte) {
   /* selectedGood.qte-=data.qte;
this.fs.collection("products").doc(data.yu).update({
qte: selectedGood.qte
})  */
    localStorage.setItem("uh", selectedGood.qte)
    
localStorage.setItem('oi',selectedGood.id)
let t;

let m="true";
console.log(this.size)
for( t=0;t<=this.size-1;t++)
{
if(selectedGood.id===results[t].uid){
m="false";
break

}
}
if( m=="true" ){

this.sh.addToCart(data).then(() => (this.add = -1));
this.router.navigate(['/home/'+id])

t++
}else{console.log('addition')
console.log(results[t].id)
results[t].qte=results[t].qte+data.qte
this.fs.collection(`users/${this.as.use}/cart`).doc(results[t].id).update({


qte:+results[t].qte,


})
} 
  
    }else{
   this.me="less ";
    }
  }else{
    this.mo="empty";
  }
  

}
}
}


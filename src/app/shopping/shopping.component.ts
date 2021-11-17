
import { Component, OnInit, ElementRef ,ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/app';
import { stringify } from 'querystring';

import { Button } from 'selenium-webdriver';
import { AuthService } from '../services/auth.service';
import { ShService } from '../services/sh.service'


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  
  keyParams:any
  dataProduct:any
  constructor(private cs:ShService,private as:AuthService,private fs:AngularFirestore,private parms:ActivatedRoute,public rm:Router) {
    this.parms.params.subscribe(query=>{
      return this.keyParams=query.key
    })
   }
   datap={
    name:" ",
    
    
    adress:" " ,
    total:" "
  }
cart:any
t:any=0
y:any
ss:any
h:any;
paymentHandler:any = null;
//handler:any = null;
m:any;
 lp:string
 dtz:any
 size:any
 fm:any
 l:any

  

  ngOnInit(): void {
 
    this.cs.getCart().subscribe((cart) => {
      this.size=cart.length
  	this.fm= cart.map((shopping) => {
				 return {
					id: shopping.payload.doc.id,
          title:shopping.payload.doc.data()['title'],
          qte:shopping.payload.doc.data()['qte'],
          price:shopping.payload.doc.data()['price'] ,
          np:shopping.payload.doc.data()['np'],
          uid:shopping.payload.doc.data()['yu']
				};
        
			});
     
		})
   
    this.fs.collection('products').snapshotChanges().subscribe((data)=>{
      this.dtz=data.map(ele=>{
         return{
          id:ele.payload.doc.id,
          title:ele.payload.doc.data()['title'],
          qte:ele.payload.doc.data()['qte'],
          description:ele.payload.doc.data()['description'],
          Image:ele.payload.doc.data()['image']
        }
      })
    });
    
    this.invokeStripe();
    
   // this.loadStripe();
 
}

 
  delete(index){
    if (confirm('Are you sure?')) {
		this.cs.delete(this.fm[index].id);
    this.t-=this.fm[index].qte*this.fm[index].price
    /*this.fs.collection('products').snapshotChanges(this.keyParams).subscribe((data)=>{
      this.dataProduct=data.map((ele)=>{
          this.fs.doc(`products/${ele.payload.doc.id}`).update({
            qte:ele.payload.doc.data()['qte'] 
          })
    
       })
  
       //this.fs.collection("products").doc(localStorage.getItem("er")).update({
      //qte: this.lm.qte
  })
  */  //})

  /*;
  console.log(results[index].qte)
 results[index].qte=results[index].qte+this.cart[index].qte
  this.fs.collection('products').doc(localStorage.getItem('oi')).update({
    qte:results[index].qte
    
  })*/
  
	}
  }
  delet(){
    
    this.cs.getCart().subscribe((cart) => {
      this.cart = cart.map((shopping) => {
          this.fs.doc(`users/${this.as.use}/cart/${shopping.payload.doc.id}`).delete()
      })
      this.t=0;
      
    
  
      });
        
    

}
bv:any
update(i:any){
  if(this.fm[i].qte<=JSON.parse(localStorage.getItem('md'))){
  this.cs.updatee(this.fm[i].id,this.fm[i].qte)
  console.log("gooddddddd")
  }
  else{
    console.log('leeeeesss')
  }
}  


tot(){
  let le=this.fm.filter(y=>y);

for( let f=0;f<=this.size-1;f++){
  if(le[f].np==0){
   
    this.t+=(le[f].qte*le[f].price);
  
  }else{
this.t+=(le[f].qte*le[f].np)

}
 
}


return this.t;
 
}
isV: boolean = true;
    confirm() {

       let data = {
        name: localStorage.getItem('ls'),
        total: this.tot(),
        uid: localStorage.getItem('sl'),
        adress:localStorage.getItem('gt'),
        date : firebase.firestore.FieldValue.serverTimestamp(),
        
        };
      
    console.log(data.date)
    
        this.cs.orders(data).then(()=>console.log("yes"));
        localStorage.setItem('sf',JSON.stringify(data.date))
        let r=0;
        let re=this.fm.filter(y=>y);
       
        
        
        this.fs.collection('products').snapshotChanges().subscribe((ss) => {
          while(r<=this.size-1){
          this.ss = ss.map((shopping) => {
       
         
        let o=0
       if(re[r].uid==shopping.payload.doc.id){
         console.log(re[r].uid)
          
         o=shopping.payload.doc.data()['qte']-re[r].qte
        this.fs.doc(`products/${shopping.payload.doc.id}`).update({
        
         qte:o
       })
       
         
          
         }
   })
   r++ ;
  }
  })
   
 
      const paymentHandler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51JducsAi0N2fpujzKyiS120MyqAYnpWCa468Heo0m9xiKgOZoQ7yf6DChrrYrWhXDIzN12oGNRdou6IlUn3iqjI1008yLUBSu4',
        locale: 'auto',
       
        token: function (stripeToken: any) {
          console.log(stripeToken);
  
          window.location.href = "/shopping/"+data.uid;
          
        }
       
      }
      );
      
      
      paymentHandler.open({
        name: 'e commerce',
        description: 'computer',
        amount:data.total
      });
     
     
   
      this.isV = false;  
       
        
           }
           invokeStripe() {
            if(!window.document.getElementById('stripe-script')) {
              const script = window.document.createElement("script");
              script.id = "stripe-script";
              script.type = "text/javascript";
              script.src = "https://checkout.stripe.com/checkout.js";
              script.onload = () => {
                this.paymentHandler = (<any>window).StripeCheckout.configure({
                  key: 'pk_test_51JducsAi0N2fpujzKyiS120MyqAYnpWCa468Heo0m9xiKgOZoQ7yf6DChrrYrWhXDIzN12oGNRdou6IlUn3iqjI1008yLUBSu4',
                  locale: 'auto',
                  token: function (stripeToken: any) {
                    console.log(stripeToken)
                    alert('Payment has been successfull!');
                  }
                });
              }
                
              window.document.body.appendChild(script);
            }
            
        
          }       /* var handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('thank you');
          }
        });
     
        handler.open({
          name: 'e-commerce',
          description: 'computer',
          amount: total 
        });
     
      
        }
        loadStripe() {
     
          if(!window.document.getElementById('stripe-script')) {
            var s = window.document.createElement("script");
            s.id = "stripe-script";
            s.type = "text/javascript";
            s.src = "https://checkout.stripe.com/checkout.js";
            s.onload = () => {
              this.handler = (<any>window).StripeCheckout.configure({
                key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
                locale: 'auto',
                token: function (token: any) {
                  // You can access the token ID with `token.id`.
                  // Get the token ID to your server-side code for use.
                  console.log(token)
                  alert('Payment Success!!');
                }
              });
            }
             
            window.document.body.appendChild(s);
          }*/
        
      
        }  
        
      

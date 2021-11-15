import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ShService {
cart: any
  constructor(private fs: AngularFirestore, private as:AuthService,
    private storage: AngularFireStorage) { }
    task:AngularFireUploadTask
    ref:AngularFireStorageReference
    persentages :any  
  addToCart(data:any) {
    return this.fs.collection(`users/${this.as.use}/cart`).add(data);
    }
    getCart() {
      return this.fs.collection(`users/${this.as.use}/cart`).snapshotChanges();
      }
      delete(id){
        return this.fs.doc(`users/${this.as.use}/cart/${id}`).delete();
        }
      updatee(id,qte){
        return this.fs.doc(`users/${this.as.use}/cart/${id}`).update({
          qte
        })
      }
        getUserData() {
          return this.fs.doc('users/' + this.as.use).valueChanges();
        }
        getor() {
          return this.fs.doc(`orders/id/${this.as.use}`).snapshotChanges();
        } 
        orders(data:any) {
          return this.fs.collection("orders").add(data);
          }
          getpro() {
            return this.fs.collection('products').snapshotChanges();
            }
            getCategories(){
              return this.fs.collection('categories').snapshotChanges();
            }
            getmark(){
              return this.fs.collection('mark').snapshotChanges();
            }
           
            searchCategoryProducts(categoryId:any){
              return this.fs.doc(`products/id/${categoryId}`).snapshotChanges();
            }
    addNewGood(title: string, price: string, image:File,description:string,categories:string,mark:string,qte:number,offer:string,percent:string,offerv:string,np:any,offf:any) {
      const id=Math.random().toString(36).substring(2)
      this.ref=this.storage.ref(id)
      this.task=this.ref.put(image)
      this.persentages=this.task.percentageChanges()
      this.task.then((data)=>{
      data.ref.getDownloadURL().then((photoUrl) => {
      this.fs.collection('products').doc().set({
                        title:title,
                        price:price,
                        image:photoUrl,
                        description:description,
                        qte:qte,
                        categories:categories,
                        mark:mark,
                        offer:offer,
                        percent:percent,
                        offerv:offerv,
                        np:np,
                        offf:offf
                      })});
                    })
            }
 /*addNewuser(flName:string,email:string,role:string,adress:string,password:string) {
            this.fs.collection('users').doc().set({
                              flName:flName,
                              email:email,
                              role:role,
                              adress:adress,
                              password:password
                          
                
                            })
                            
                         }*/
                        
          }
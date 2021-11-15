import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
export interface Star{
  usId:any,
  prId:any,
  value:number,

}
@Injectable({
  providedIn: 'root'
})
export class StarService {

  constructor(private fs:AngularFirestore) { }
  getUserStar(usId){
    const starsRef=this.fs.collection('stars',ref=>ref.where('usId','==',usId));
    return starsRef.valueChanges()
    
  }
  getprStar(prId){
    const starsRef=this.fs.collection('stars',ref=>ref.where('prId','==',prId));
    return starsRef.valueChanges()
    
  }
  setStar(usId,prId,value){
    const star:Star={usId,prId,value};
    const starpath=`stars/${star.usId}_${star.prId}`;
    return this.fs.doc(starpath).set(star);
  }
}

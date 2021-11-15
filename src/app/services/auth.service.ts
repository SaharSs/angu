import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
public df:Observable<firebase.User>
use:string="";
  constructor(public fs:AngularFireAuth,
    private fst:AngularFirestore) {
    this.df=this.fs.user;
   }

  signup(email:any,password:any){
return this.fs.createUserWithEmailAndPassword(email,password);
  }
  signin(email:any,password:any){
    return this.fs.signInWithEmailAndPassword(email,password);
  }
  getUserData() {
		return this.fst.collection('users').doc(this.use).snapshotChanges();
	}

}

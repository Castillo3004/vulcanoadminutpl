import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public afauth: AngularFireAuth ) {}
  router: Router
  

 
  async loginWithGoogle(email:string, password:string){
    try{
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }catch (err){
      console.log("error en el login con google   ", err)
      return null;
    }
  }

  getUserLogged(){
    return this.afauth.authState;
  }
  

  logout(){
    this.afauth.signOut();
  }
}

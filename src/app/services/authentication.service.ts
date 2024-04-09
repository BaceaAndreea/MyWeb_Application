import { Injectable } from '@angular/core';
import firebase from "firebase/compat";
import Auth = firebase.auth.Auth;
import {signInWithEmailAndPassword, signOut} from "@angular/fire/auth";
import {from} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private auth: Auth) { }
  login(username: string, password: string){
    return from(signInWithEmailAndPassword(this.auth, username, password));
  }
  logout(){
    return from(this.auth.signOut())
  }
}


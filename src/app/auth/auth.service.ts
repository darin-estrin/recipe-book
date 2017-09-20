import { firebaseConfig } from './firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    return  new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => {
          resolve(this.router.navigate(['/recipes']))
          return response;
        }
      )
      .catch(
        error => reject(error)
      );
    }) 
  }

  signinUser(email: string, password: string) {
    return new Promise ((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          resolve(response);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token;
                this.router.navigate(['/recipes']);
              }
            )
        }
      )
      .catch(
        error => reject(error)
      );
    })
  }

  logout() {
    this.router.navigate(['/']);
    firebase.auth().signOut();
    this.token = null;
  }

  getUser() {
    return firebase.auth().currentUser;
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return localStorage.getItem(`firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`) != null;
  }

}

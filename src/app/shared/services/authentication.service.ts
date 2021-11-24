import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    public afAuth: AngularFireAuth
  ) {

   }
  SignUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)

  }

  SignIn(email : string, password : string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
  }

  SignOut() {
    return this.afAuth.signOut();
  }
}

//https://auth-angular-a05cb-default-rtdb.europe-west1.firebasedatabase.app/ + '/posts.json'

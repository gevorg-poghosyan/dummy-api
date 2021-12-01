import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuth = false
  constructor(
    public afAuth: AngularFireAuth
  ) {

   }
  SignUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)

  }

  SignIn(email : string, password : string) {
    this.isAuth = true;
    return this.afAuth.signInWithEmailAndPassword(email, password)
  }

  SignOut() {
    this.isAuth = false;
    localStorage.removeItem('token');
    return this.afAuth.signOut();
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise(resolve =>{
      setTimeout(()=>{
        resolve(this.isAuth)
      },1000)
    })
  }

}

//https://auth-angular-a05cb-default-rtdb.europe-west1.firebasedatabase.app/ + '/posts.json'

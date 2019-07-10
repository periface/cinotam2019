import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginInput } from '../models/account.models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  /**
   *
   */
  constructor(public afAuth: AngularFireAuth) {}
  login(loginInput: LoginInput): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(
      loginInput.email,
      loginInput.password
    );
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}

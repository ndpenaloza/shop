import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  // login() {
  //   this.afAuth.signInWithRedirect(new firebase.GoogleAuthProvider());
  // }
  login = () => {
    const provider = new firebase.GoogleAuthProvider();
    this.afAuth.signInWithRedirect(provider);
  }
}

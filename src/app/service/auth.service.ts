import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(private firestore: AngularFirestore, public afAuth: AngularFireAuth) { }

    async login(email, pass) {
        return this.afAuth.signInWithEmailAndPassword(email, pass);
    }

    async recuperarSenha(email) {
        return this.afAuth.sendPasswordResetEmail(email);
    }

    async registarEstudante($user) {
        console.log("passo")
        this.afAuth.createUserWithEmailAndPassword($user.email, $user.password).then(res => {
           // resolve(res);
            console.log("passou4: ", res)
        });
        console.log("passou1")
        return this.afAuth.onAuthStateChanged(newUser => {
            console.log("passou3: ", newUser)
            if (newUser) {
                this.firestore.collection("Estudantes").doc(newUser.uid).update({
                    nome: $user.nome
                });
            }
        })
    }
}
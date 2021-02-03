import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})

export class CursoService {
    constructor(private firestore: AngularFirestore) { }

    async cursos(){
        return await this.firestore.collection("Cursos").valueChanges();
    }

    async comprar(id){
        return this.firestore.collection("Cursos")
        .doc(id).update({
          Pago:true
        });
    }
}
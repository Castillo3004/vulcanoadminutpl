import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Stands } from 'src/app/models/stands';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})

export class StandsService {
  private standsCollection: AngularFirestoreCollection<Stands>;
  stands: Observable<Stands[]>;
  constructor(private afs: AngularFirestore) { 
    this.standsCollection = afs.collection<Stands>('stands');
    this.stands = this.standsCollection.valueChanges();
  }

    // Trae todos los eventos
    getAllEvents() {
      return this.afs.collection('stands').snapshotChanges();
    }
  
    //Trae el ID
    getEventoById(id) {
      return this.afs.collection('stands').doc(id).valueChanges();
    }
  
    //Agrega al Doc
    addPost(post: Stands) {
      return new Promise<any>((resolve, reject) => {
        this.afs
          .collection('stands')
          .add(post)
          .then(
            (response) => {
              Swal.fire({
                title: 'Exito',
                text: 'El stand se a creado correctamente',
                icon: 'success',
              });
              console.log(response);
            },
            (error) => {
              Swal.fire({
                title: 'Error',
                text: error,
                icon: 'error',
              });
              reject(error);
            }
          );
      });
    }
  
    // Actualizar Eventos
    updateEvento(post: Stands, id) {
      return this.afs.collection('stands').doc(id).update({
        title: post.title,
        dateStar: post.image,
        datefin: post.video,
        description: post.votacion,
      });
    }
    //Eliminar Eventos
    deletePost(post) {
      return this.afs.collection('events').doc(post.id).delete();
    }
}


import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Events } from 'src/app/models/events';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private eventsCollection: AngularFirestoreCollection<Events>;
  events: Observable<Events[]>;
  constructor(private afs: AngularFirestore) {
    this.eventsCollection = afs.collection<Events>('events');
    this.events = this.eventsCollection.valueChanges();
  }

  // Trae todos los eventos
  getAllEvents() {
    return this.afs.collection('events').snapshotChanges();
  }

  //Trae el ID
  getEventoById(id) {
    return this.afs.collection('events').doc(id).valueChanges();
  }

  //Agrega al Doc
  addPost(post: Events) {
    return new Promise<any>((resolve, reject) => {
      this.afs
        .collection('events')
        .add(post)
        .then(
          (response) => {
            Swal.fire({
              title: 'Exito',
              text: 'El evento se a creado correctamente',
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
  updateEvento(post: Events, id) {
    return this.afs.collection('events').doc(id).update({
      title: post.title,
      dateStar: post.dateStar,
      datefin: post.datefin,
      description: post.description,
    });
  }

  //Eliminar Eventos
  deletePost(post) {
    return this.afs.collection('events').doc(post.id).delete();
  }

  addEvent(event: Events) {
    this.eventsCollection
      .add(event)
      .then((result) => {
        Swal.fire({
          title: 'Exito',
          text: 'El evento se a creado correctamente',
          icon: 'success',
        });
      })
      .catch((err) => {
        Swal.fire({
          title: 'Error',
          text: err,
          icon: 'error',
        });
      });
  }
}

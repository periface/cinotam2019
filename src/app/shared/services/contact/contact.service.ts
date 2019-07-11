import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { ContactModel } from './models/contact.models';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactCollection: AngularFirestoreCollection<ContactModel>;
  /**
   *
   */
  constructor(private db: AngularFirestore) {
    this.contactCollection = this.db.collection<ContactModel>('contact');
  }
  sendContactForm(
    input: ContactModel
  ): Promise<firebase.firestore.DocumentReference> {
    return this.contactCollection.add(input);
  }
}

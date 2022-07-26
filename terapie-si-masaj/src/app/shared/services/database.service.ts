import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { difference, filter, isEmpty } from 'lodash';
import { map, Observable } from 'rxjs';

import { hours } from '../constants/schedule.const';
import { AppointmentModel } from '../models/appointment.model';


@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    itemsCollection: AngularFirestoreCollection<AppointmentModel>;
    items: Observable<AppointmentModel[]>;
    itemDoc!: AngularFirestoreDocument<AppointmentModel>;

    constructor(private angularFirestore: AngularFirestore) {
        this.itemsCollection = this.angularFirestore.collection('appointments');

        this.items = this.itemsCollection.snapshotChanges().pipe(
            map(changes => {
                return changes.map(a => {
                    const data = a.payload.doc.data() as AppointmentModel;
                    data.id = a.payload.doc.id;
                    return data;
                });
            })
        );

    }


    getItems() {
        return this.items;
    }

    getAvailableHours(date: string) {
        return this.angularFirestore.collection('appointments', (ref) => ref.where('date', '==', date)).snapshotChanges().pipe(
            map(changes => changes.map(a => (a.payload.doc.data() as AppointmentModel).hour)
            )).pipe(map(unavailableHours => filter(unavailableHours, hour => !isEmpty(hour))))
    }

    addItem(item: AppointmentModel) {
        this.itemsCollection.add(item);
    }

    deleteItem(item: AppointmentModel) {
        this.itemDoc = this.angularFirestore.doc(`appointments/${item.id}`);
        this.itemDoc.delete();
    }

    updateItem(item: AppointmentModel) {
        this.itemDoc = this.angularFirestore.doc(`appointments/${item.id}`);
        this.itemDoc.update(item);
    }
}


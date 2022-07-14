import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'terapie-si-masaj';
  constructor(firestore: AngularFirestore) {
     firestore.collection('roles').valueChanges().subscribe(data => console.log(data, 'data'));
     Aos.init();
  }
}

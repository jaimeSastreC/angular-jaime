import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;
  lastUpdate = new Date();

  client = new Promise(
    (resolve, reject) => {
      const client1 = 'Dufour';
      setTimeout(
        () => {
          resolve(client1);
        }, 2000
      );
    }
  );

  appareils: any[];
  appareilSubscription: Subscription;

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    // avant quand pas private
    // this.appareils = this.appareilservice.appareils;
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllumer() {
    // console.log('on allume!');
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    }
  }

  onSave() {
    this.appareilService.saveAppareilToServer();
  }

  onFetch() {
  this.appareilService.getAppareilFromServer();
  }
}

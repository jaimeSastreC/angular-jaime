import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

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

  constructor(private appareilservice: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit(): void {
    this.appareils = this.appareilservice.appareils;
  }

  onAllumer() {
    // console.log('on allume!');
    this.appareilservice.switchOnAll();
  };

  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')){
      this.appareilservice.switchOffAll();
    }
  }
}

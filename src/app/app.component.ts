import { Component, OnInit } from '@angular/core';
import {AppareilService} from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 constructor() {}
}

/*

onAllumer() {
  console.log('on allume!');
  this.appareils[0].status = 'allumé';
  this.appareils[1].status = 'allumé';
  this.appareils[2].status = 'allumé';
}
*/

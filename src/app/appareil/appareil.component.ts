import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  // appareilName:string = 'machine à laver';
  @Input() appareilName: string;
  @Input() appareilStatus: string;

  // appareilStatus: string = 'éteint';

  constructor() { }

  ngOnInit() {
  }


  getAppareilName() {
    return this.appareilName;
  }

  getAppareilStatus() {
    return this.appareilStatus;
  }

  setAppareilStatus(statut) {
    this.appareilStatus = 'allumé';
  }


}

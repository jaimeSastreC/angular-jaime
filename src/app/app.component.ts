import {Component, OnDestroy, OnInit} from '@angular/core';
// import {AppareilService} from './services/appareil.service';
import {interval, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  secondes: number;
  counterSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    // observe toutes les 1 sec
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (value: number) => {
        this.secondes = value;
      }
    );
  }

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }
}



/*

 ngOnInit() {
    // observe toutes les 1 sec
    const counter = interval(1000);
    counter.subscribe(
      (value: number) => {
        this.secondes = +value;
      },
      (error: any) => {
        console.log('Une erreur a été rencontrée !');
      },
      () => {
        console.log('Observable complétée !');
      }
    );
  }
}

onAllumer() {
  console.log('on allume!');
  this.appareils[0].status = 'allumé';
  this.appareils[1].status = 'allumé';
  this.appareils[2].status = 'allumé';
}
*/

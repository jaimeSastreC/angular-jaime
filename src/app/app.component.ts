import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'Projet: angular-jaime';

  isAuth = false;
  appareilStatus = 'éteint';

  appareilOne = 'Machine à laver';
  appareilTwo = 'Frigo';
  appareilThree = 'Ordinateur';

  appareilOneStatus = 'éteint';
  appareilTwoStatus = 'allumé';
  appareilThreeStatus = 'éteint';

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer() {
    console.log('on allume!');
    this.appareilStatus = 'allumé';
    // on allume tous les appareils :
    this.appareilOneStatus = this.appareilStatus;
    this.appareilTwoStatus = this.appareilStatus;
    this. appareilThreeStatus = this.appareilStatus;
  }

}


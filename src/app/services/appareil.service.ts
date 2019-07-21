export class AppareilService {
  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Machine à café',
      status: 'éteint'
    }
  ];

  switchOnAll() {
    for (let appareil of this.appareils){
      appareil.status = 'allumé';
    }
  }

  switchOffAll() {
    for (let appareil of this.appareils){
      appareil.status = 'éteint';
    }
  }

  switchOnAppareil(index: number) {
    this.appareils[index].status = 'allumé';
  }

  switchOffAppareil(index: number) {
    this.appareils[index].status = 'éteint';
  }
}
